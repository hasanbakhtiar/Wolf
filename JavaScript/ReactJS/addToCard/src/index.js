import React from 'react'; 
import ReactDOM from 'react-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Product from './components/page/Product';
import Cart from './components/page/Cart';

const App=()=>{
    return(
        <div>
        <h1 className='text-center'>AddToCard Project</h1>
        <Product/>
        <Cart />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));