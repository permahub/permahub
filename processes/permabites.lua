--[[
  Permabites AO Process
  Handles storage and retrieval of community articles/comments

  Terms:
    Sender: the wallet or Process that sent the Message

  It implements the following API:
    - CreatePermabite: create a new permabite article
    - AddComment: add a comment to an existing permabite
    - GetPermabites: retrieve all permabites
    - GetComments: retrieve comments for a specific permabite
]]--

local json = require('json')

-- Initialize State
if not Permabites then Permabites = {} end
if not Comments then Comments = {} end

-- Helper function to generate unique ID
local function generate_id()
    return tostring(os.time()) .. "_" .. math.random(1000, 9999)
end

--[[
  CreatePermabite Handler
]]--
Handlers.add(
    'create-permabite',
    Handlers.utils.hasMatchingTag('Action', 'CreatePermabite'),
    function(msg)
        local data = json.decode(msg.Data)
        local id = generate_id()
        
        Permabites[id] = {
            id = id,
            author = data.author or "anon",
            title = data.title,
            content = data.content,
            twitter = data.twitter or "",
            timestamp = os.time(),
            comments = {}
        }
        
        ao.send({
            Target = msg.From,
            Tags = {
                Action = 'Permabite-Created',
                Id = id,
                Status = 'success'
            }
        })
    end
)

--[[
  AddComment Handler
]]--
Handlers.add(
    'add-comment',
    Handlers.utils.hasMatchingTag('Action', 'AddComment'),
    function(msg)
        local data = json.decode(msg.Data)
        
        if not Permabites[data.permabite_id] then
            ao.send({
                Target = msg.From,
                Tags = {
                    Action = 'Comment-Error',
                    Error = 'Permabite not found'
                }
            })
            return
        end
        
        local comment_id = generate_id()
        local comment = {
            id = comment_id,
            permabite_id = data.permabite_id,
            author = data.author or "anon",
            content = data.content,
            twitter = data.twitter or "",
            timestamp = os.time()
        }
        
        Comments[comment_id] = comment
        table.insert(Permabites[data.permabite_id].comments, comment_id)
        
        ao.send({
            Target = msg.From,
            Tags = {
                Action = 'Comment-Added',
                Id = comment_id,
                Status = 'success'
            }
        })
    end
)

--[[
  GetPermabites Handler
]]--
Handlers.add(
    'get-permabites',
    Handlers.utils.hasMatchingTag('Action', 'GetPermabites'),
    function(msg)
        local result = {}
        for id, permabite in pairs(Permabites) do
            table.insert(result, permabite)
        end
        
        ao.send({
            Target = msg.From,
            Data = json.encode(result),
            Tags = {
                Action = 'Permabites-List',
                Status = 'success'
            }
        })
    end
)

--[[
  GetComments Handler
]]--
Handlers.add(
    'get-comments',
    Handlers.utils.hasMatchingTag('Action', 'GetComments'),
    function(msg)
        local data = json.decode(msg.Data)
        
        if not Permabites[data.permabite_id] then
            ao.send({
                Target = msg.From,
                Tags = {
                    Action = 'Comments-Error',
                    Error = 'Permabite not found'
                }
            })
            return
        end
        
        local result = {}
        for _, comment_id in ipairs(Permabites[data.permabite_id].comments) do
            if Comments[comment_id] then
                table.insert(result, Comments[comment_id])
            end
        end
        
        ao.send({
            Target = msg.From,
            Data = json.encode(result),
            Tags = {
                Action = 'Comments-List',
                Status = 'success'
            }
        })
    end
)

--[[
  Clear All Permabites and Comments Handler (ADMIN ONLY)
]]--
Handlers.add(
    'clear-all',
    function(msg)
        -- Only allow from your admin wallet address
        return msg.From == "3IzYpZNvdOCmHrTtrNt2Sag2oQ8kxoNSXB6sLkkAIY4" and Handlers.utils.hasMatchingTag('Action', 'ClearAllPermabites')(msg)
    end,
    function(msg)
        print("ClearAllPermabites handler triggered by", msg.From)
        Permabites = {}
        Comments = {}
        ao.send({
            Target = msg.From,
            Tags = {
                Action = 'Permabites-Cleared',
                Status = 'success'
            }
        })
    end
)
