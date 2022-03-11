import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import {blogAdd, blogRemove, blogEdit} from './actions/blogs';
import AppRouter from "./routers/AppRouter";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 
import { Provider } from "react-redux";
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';



const store = configureStore();

//Blog Dispatch Start
// =======================================================
store.subscribe(()=>{
    // console.log(store.getState());
})


// Old dispatch start
// ============================================================================
// const blog1 = store.dispatch(blogAdd({title:"blog1", description:"description1",dataAdded:'2022'}));
// const blog2 = store.dispatch(blogAdd({title:"blog2", description:"description3",dataAdded:'2021'}));
// console.log(blog2.blog.id);
// store.dispatch(blogRemove({id:blog2.blog.id}))
// store.dispatch(blogEdit(blog1.blog.id,{title:"update",description:"helo"}));
// ============================================================================
// Old dispatch end



store.dispatch(blogAdd({title:"What is React JS", description:"A JavaScript library for building user interfaces",dataAdded:"2021",img:img1}));


store.dispatch(blogAdd({title:"What is Programming language", description:"A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.",dataAdded:"11/03/2022",img:img2}))


// =======================================================
//Blog Dispatch End



const App = () => {
  return(
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
 
  
};

ReactDOM.render(<App />, document.getElementById("root"));
