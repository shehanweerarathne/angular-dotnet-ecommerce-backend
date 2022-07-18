import React from 'react'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store/configureStore";
import Footer from "./components/footer/Footer";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
)

