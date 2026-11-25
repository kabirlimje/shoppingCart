import { createRoot } from 'react-dom/client'
import { UserContextProvider } from './context/UserContextProvider.jsx'
import { BrowserRouter } from "react-router"
import App from './App.jsx'
import '../src/main.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
