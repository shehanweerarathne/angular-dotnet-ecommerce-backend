import React, {useState, useEffect, useCallback} from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Catalog from './components/catalog/Catalog'
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {ToastContainer} from "react-toastify";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import ProductDetails from "./components/catalog/ProductDetails";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFound from "./components/errors/NotFound";
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import BasketPage from "./pages/basket/BasketPage";

import LoadingComponent from "./components/errors/LoadingComponent";
import {useStoreContext} from "./context/StoreContext";
import {getCookie} from "./util/util";
import agent from "./API/Agent";
import {useAppDispatch} from "./store/configureStore";
import {fetchBasketAsync, setBasket} from "./pages/basket/basketSlice";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import Footer from "./components/footer/Footer";
import {fetchCurrentUser} from "./pages/Account/accountSlice";
import CheckoutPage from "./components/checkout/CheckoutPage";
import Orders from "./components/orders/Orders";


function App() {
    const dispatch = useAppDispatch();


    const [loading, setLoading] = useState(true);

    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCurrentUser());
            await dispatch(fetchBasketAsync());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);
    
    useEffect(() => {
      initApp().then(()=>setLoading(false))
    }, [initApp])


    const [darkMode, setDarkMode] = useState(false);
    const palletType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: palletType,
            background: {
                default: palletType === 'light' ? '#eaeaea' : '#121212'
            }
        }
    })
    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    }
    if (loading) return <LoadingComponent message='Initializing app...'/>
    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
            <CssBaseline/>
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            <br/><br/><br/>
            <Container>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/catalog'} element={<Catalog/>}/>
                    <Route path={'/catalog/:id'} element={<ProductDetails/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/contact'} element={<ContactPage/>}/>
                    <Route path={'/basket'} element={<BasketPage/>}/>
                    <Route path={'/checkout'} element={<CheckoutPage/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/orders'} element={<Orders/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Container>

            {/*<Footer/>*/}

        </ThemeProvider>
    )
}

export default App
