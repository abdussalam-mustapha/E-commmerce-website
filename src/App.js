import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import "./components/header/Header.css";
import Header from "./components/header/Header";
import Pages from "./components/pages/Pages";
import Data from "./components/flashdeals/Data"
import Sdata from "./components/shop/Sdata";
import Carts from "./components/carts/Cart";


function App() {

  const {productItems} = Data
  const {shopItems} = Sdata

  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit){
      setCartItem(cartItem.map((item) => 
      (  item.id===product.id ? 
       {...productExit,qty:productExit.qty+1} : item)))
    }else {
      setCartItem([...cartItem, {...product, qty: 1}])
    }
  }


  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty-1} : item)))
    }
  }

  return (
    <>
     <Router>
      <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems = {productItems} addToCart={addToCart} shopItems={shopItems}/>
          </Route>
          <Route path="/Cart" exact>
            <Carts cartItem = {cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
