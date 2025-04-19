import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Function to detect DevTools and log ASCII "ELTIO"
const detectDevTools = () => {
  const devtools = { open: false };
  const threshold = 160; // Common width when DevTools is open

  setInterval(() => {
    const width = window.outerWidth - window.innerWidth > threshold;
    const height = window.outerHeight - window.innerHeight > threshold;

    if ((width || height) && !devtools.open) {
      devtools.open = true;
      console.log(`%c
        
  _ \ __|  _ \   \  |    \    |  |  |  | _ ) 
  __/ _|     /  |\/ |   _ \   __ |  |  | _ \ 
 _|  ___| _|_\ _|  _| _/  _\ _| _| \__/ ___/ 
                                                                                                                                                                                                                                  
    Permasite by ELTIO                                  
`, "color:rgb(31, 85, 21); font-weight: bold; font-size: 16px;");
    } else if (!width && !height) {
      devtools.open = false;
    }
  }, 1000);
};

// Call the function to start monitoring DevTools
detectDevTools();

// Render the React app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
