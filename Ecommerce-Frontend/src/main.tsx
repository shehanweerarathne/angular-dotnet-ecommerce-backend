import React from 'react'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import {StoreProvider} from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
           <StoreProvider>
				<App />
          </StoreProvider>
      </BrowserRouter>

  </React.StrictMode>
)

