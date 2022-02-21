import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Product from '../components/page/Product';
import Cart from '../components/page/Cart';
import { CartProvider } from 'react-use-cart';
import Nav from '../components/Nav'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Switch>
<CartProvider>
    <Nav />
<Route exact path="/" component={Product}></Route>
<Route  path="/cart" component={Cart}></Route>

</CartProvider>

    </Switch>
    </BrowserRouter>
  )
}

export default AppRouter