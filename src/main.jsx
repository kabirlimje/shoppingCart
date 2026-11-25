import { createRoot } from 'react-dom/client'
import { UserContextProvider } from './context/UserContextProvider.jsx';
import App from './App.jsx'
import '../src/main.css';

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
