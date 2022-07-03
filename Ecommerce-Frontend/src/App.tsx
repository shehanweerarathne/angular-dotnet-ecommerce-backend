import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

import Catalog from "./components/catalog/Catalog"
import {Product} from "./models/product";
import {Container, CssBaseline, Typography, TypographyVariant} from "@mui/material";
import Header from "./components/header/Header";



function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(()=>{
    fetch('https://localhost:7194/api/Product')
        .then(response=>response.json())
        .then(data=>setProducts(data))
  },[])
  const addProduct = () => {
    setProducts(prevState=>[...prevState,{
        id:prevState.length +1,
        name: 'product' + (prevState.length +1),
        price:(prevState.length*100) +200.00,
        description:'',
        brand:'',
        type:'',
        quantityInStock:0,
        pictureUrl:'https://picsum.photos/200'
    }])
  }

  return (
      <div>
          <CssBaseline/>
       <Header/>
          <Container>
              <Catalog products={products} addProduct={addProduct}/>
          </Container>


      </div>
  )
}

export default App
