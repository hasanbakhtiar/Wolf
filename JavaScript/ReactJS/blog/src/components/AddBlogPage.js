import React from 'react'
import BlogForm from './BlogForm'
import { addBlogToDatabase } from '../actions/blogs'
import { connect } from 'react-redux'

const AddBlogPage = (props) => {
  return (
    <div>
          <h1 className='text-center'>Add Blog Page</h1>

        <BlogForm onSubmit={(blogAmazoniya)=>{
            props.dispatch(addBlogToDatabase(blogAmazoniya));
            props.history.push('/blog');
            }}/>
    </div>
  )
}

export default connect()(AddBlogPage)