import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Cart from './components/Cart';
import Products from './components/Products';

import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      setProducts(data);
      
    }

    fetchProducts();

  }, [])

  const addToCart = async (newProductId) => {
    
    const body = {
      productId: newProductId
    }

    if (!cartId) {

      const response = await fetch('http://localhost:3000/carts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      setCartId(data.id);
      setCartItems(data.products);
    
    } else {

      const response = await fetch(`http://localhost:3000/carts/${cartId}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const data = await response.json();
      setCartItems(data.products);


    } 
  }

  console.log(cartItems);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Buy our Products</h1>
          
        </header>
        <main>
          
          <Link to="/">View your Products</Link>
          <Link to="/cart">View your cart</Link>
          
          <Route exact path="/" render={() => <Products products={products} addToCart={addToCart} />} />
          <Route path="/cart" render={() => <Cart cartItems={cartItems} />}/>
          
        </main>
      </div>
    </Router>
  );
  
}

export default App;
