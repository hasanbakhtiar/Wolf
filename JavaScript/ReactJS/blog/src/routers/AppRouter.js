import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import AddBlogPage from '../components/AddBlogPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import BlogListPage from '../components/BlogListPage'
import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

const AppRouter = () => {
  return (
    <BrowserRouter>
            <Header />
            <Switch>
                <div className="container">
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path='/blog' component={BlogListPage}></Route>
                <Route  path='/blog/:id' component={BlogDetailsPage}></Route>
                <Route  path='/addblog' component={AddBlogPage}></Route>
                <Route  path='/contact' component={ContactPage}></Route>
                </div>
            </Switch>
    </BrowserRouter>
  )
}

export default AppRouter