import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore';
// import {blogAdd} from './actions/blogs';
import AppRouter from "./routers/AppRouter";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 
import { Provider } from "react-redux";
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';
import firebase from "./firebase/firebaseConfig";
import { getBlogsFromDatabase } from '../actions/blogs'




const store = configureStore();

const result = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})