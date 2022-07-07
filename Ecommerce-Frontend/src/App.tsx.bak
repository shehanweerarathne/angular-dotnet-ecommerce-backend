import {useState, useEffect} from 'react'
import logo from './logo.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'


import Catalog from "./components/catalog/Catalog"
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import ProductDetails from "./components/catalog/ProductDetails";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";


function App() {
    const [darkMode,setDarkMode] = useState(false);
    const palletType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: palletType,
            background:{
                default: palletType === 'light' ? '#eaeaea': '#121212'
            }
        }
    })
    const handleThemeChange = () => {
      setDarkMode(!darkMode);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            <Container>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/catalog'} element={<Catalog/>}/>
                    <Route path={'/catalog/:id'} element={<ProductDetails/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/contact'} element={<ContactPage/>}/>
                </Routes>
            </Container>


        </ThemeProvider>
    )
}

export default App
