import React, { Component } from 'react';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Header from '../components/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFoundPage from '../components/pages/NotFoundPage';
import Footer from '../components/Footer';

export class AppRouter extends Component {
  render() {
    return <BrowserRouter>
    <Header />
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about"  component={About}></Route>
        <Route path="/contact"  component={Contact}></Route>
        <Route component={NotFoundPage}></Route>
    </Switch>
    <Footer />
    </BrowserRouter>;
  }
}

export default AppRouter;
