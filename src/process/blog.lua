-- stories.lua
-- Main story management process without wallet requirements

local stories = {}
local last_story_id = 0

-- Initialize the process
function initialize()
  print("Story process initialized")
  print("Process ID: " .. ao.id)
end

-- Generate a new story ID
local function generate_story_id()
  last_story_id = last_story_id + 1
  return tostring(last_story_id)
end

-- @mutation
Handlers.add("create_story",
  { Action = "CreateStory" },
  function(msg)
    local story_id = generate_story_id()
    
    stories[story_id] = {
      id = story_id,
      title = msg.title,
      content = msg.content,
      author = msg.author or "Anonymous",
      location = msg.location or "",
      category = msg.category or "",
      timestamp = os.time(),
      metadata = {
        campaign_id = msg.campaign_id,
        submission_ip = msg.submission_ip, -- For tracking unique submissions
        user_agent = msg.user_agent
      }
    }
    
    ao.send({ 
      Target = msg.From, 
      Data = {
        status = "success",
        message = "Story created successfully",
        story_id = story_id
      }
    })
  end
)

-- Query to get all stories
Handlers.add("get_stories",
  { Action = "GetStories" },
  function(msg)
    local filtered_stories = {}
    
    -- Apply any filters from the message
    for id, story in pairs(stories) do
      if (not msg.category or story.category == msg.category) and
         (not msg.location or story.location == msg.location) then
        filtered_stories[id] = story
      end
    end
    
    ao.send({
      Target = msg.From,
      Data = filtered_stories
    })
  end
)

-- Query to get a specific story
Handlers.add("get_story",
  { Action = "GetStory" },
  function(msg)
    local story = stories[msg.story_id]
    if story then
      ao.send({
        Target = msg.From,
        Data = story
      })
    else
      ao.send({
        Target = msg.From,
        Data = { error = "Story not found" }
      })
    end
  end
)