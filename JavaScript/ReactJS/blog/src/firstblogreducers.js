import React from "react";
import ReactDOM from "react-dom";
import { createStore,combineReducers } from "redux";



//Blog Action Start
const blogAdd = ()=>({
    type: "ADD_BLOG"
})

//Blog Action End


//Blog Reducer Start
const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
        return "Blog";
      

    case "REMOVE_BLOG":
      

    case "EDIT_BLOG":

    default:
      return state;
  }
};
//Blog Reducer End

//Auth Reducer Start
const authState = [];

const authReducer = (state = authState, action) => {
  switch (action.type) {
    
        case "ADD_AUTH":
            return "Auth";
          
    
        case "REMOVE_AUTH":
          
    
        case "EDIT_AUTH":

    default:
      return state;
  }
};
//Auth Reducer End


const store = createStore(
    combineReducers({
        blog: blogReducer,
        auth:authReducer
    })
);

// const store = createStore(
//    blogReducer
// );

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
    type: "ADD_AUTH"
})

store.dispatch({
    type: "ADD_BLOG"
})

store.dispatch(blogAdd());


   








const App = () => {
  return <h1></h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
