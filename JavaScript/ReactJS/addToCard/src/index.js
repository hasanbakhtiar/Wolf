import React from 'react'; 
import ReactDOM from 'react-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './routers/AppRouter';

const App=()=>{
    return(
       <div>
            <AppRouter/>
       </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));