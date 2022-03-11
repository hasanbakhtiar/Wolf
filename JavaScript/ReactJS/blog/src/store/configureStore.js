import { createStore,combineReducers } from "redux";
import blogReducer from '../reducers/blogs';


//Blog Store Start
// =======================================================
export default ()=>{
    
const store = createStore(
    combineReducers({
        amazon: blogReducer,
       
    })
);
return store;
}

// =======================================================
//Blog Store End