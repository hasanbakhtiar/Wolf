import React from "react";
import ReactDOM from "react-dom";
import {v4 as uuid} from 'uuid'
import { createStore,combineReducers } from "redux";



//Blog Action Start
const blogAdd = ({title="",description="",dataAdded=0})=>({
    type: "ADD_BLOG",
    blog:{
        id:uuid(),
        title:title,
        description: description,
        dataAdded: dataAdded
    }
});
const blogRemove = ({id})=>(
    {
        type:"REMOVE_BLOG",
        id:id
    }
)

//Blog Action End


//Blog Reducer Start
const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
        return [
            ...state,
            action.blog
        ];
      

    case "REMOVE_BLOG":
      return state.filter(({id})=>{
          return id !== action.id
      })

    case "EDIT_BLOG":

    default:
      return state;
  }
};



const store = createStore(
    combineReducers({
        blog: blogReducer,
       
    })
);



store.subscribe(()=>{
    console.log(store.getState());
})



const blog1 = store.dispatch(blogAdd({title:"blog1", description:"description1",dataAdded:'2022'}));
const blog2 = store.dispatch(blogAdd({title:"blog2", description:"description3",dataAdded:'2021'}));

console.log(blog2.blog.id);

store.dispatch(blogRemove({id:blog2.blog.id}))







const App = () => {
  return <h1></h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
