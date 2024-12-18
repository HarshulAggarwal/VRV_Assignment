import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './auth/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
   
  </BrowserRouter>
);

