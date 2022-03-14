import React from 'react'
import BlogForm from './BlogForm'
import { blogAdd } from '../actions/blogs'
import { connect } from 'react-redux'

const AddBlogPage = (props) => {
  return (
    <div>
        <BlogForm onSubmit={(blog)=>{
            props.dispatch(blogAdd(blog));
            props.history.push('/blog');
        }}/>
    </div>
  )
}

export default connect()(AddBlogPage)