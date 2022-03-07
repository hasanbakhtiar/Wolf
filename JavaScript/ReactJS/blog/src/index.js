import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
import {blogAdd, blogRemove, blogEdit} from './actions/blogs';
import AppRouter from "./routers/AppRouter";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 
import { Provider } from "react-redux";


const store = configureStore();

//Blog Dispatch Start
// =======================================================
store.subscribe(()=>{
    console.log(store.getState());
})



const blog1 = store.dispatch(blogAdd({title:"blog1", description:"description1",dataAdded:'2022'}));
const blog2 = store.dispatch(blogAdd({title:"blog2", description:"description3",dataAdded:'2021'}));

console.log(blog2.blog.id);

store.dispatch(blogRemove({id:blog2.blog.id}))
store.dispatch(blogEdit(blog1.blog.id,{title:"update",description:"helo"}));
 store.dispatch(blogAdd({title:"blog3", description:"description3",dataAdded:'2022'}));


// =======================================================
//Blog Dispatch End



const App = () => {
  return <Provider store={store}>
    <AppRouter />
  </Provider>;
};

ReactDOM.render(<App />, document.getElementById("root"));
