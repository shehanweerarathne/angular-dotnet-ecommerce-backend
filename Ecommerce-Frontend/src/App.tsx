import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'


function App() {
  const [products, setProducts] = useState([
    {
      id:1,
      name:'product 1',
      price:100.00
    },
    {
      id:2,
      name:'product 2',
      price:150.00
    }
  ]);
  useEffect(()=>{
    fetch('https://localhost:7194/api/Product')
        .then(response=>response.json())
        .then(data=>setProducts(data))
  },[])
  const addProducts = () => {
    setProducts(prevState=>[...prevState,{id:prevState.length +1, name: 'product' + (prevState.length +1),price:(prevState.length*100) +200.00}])
  }

  return (
      <div className="container">
       <h1>Ecommerce</h1>
        <ul>
          {products.map(item =>(
              <li key={item.id}>{item.name} - {item.price}</li>
          ))}
        </ul>
        <button onClick={addProducts}>Add new product</button>
      </div>
  )
}

export default App
