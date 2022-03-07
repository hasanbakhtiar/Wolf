import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return (
    <ul>
        {props.blogs.map(blog=>{
            return <BlogListItem key={blog.id} {...blog} />
        })}
    </ul>
  )
}
const mapStateProps = (state)=>{
    return{
        blogs: state.blogs
    }
}

export default connect(mapStateProps)(BlogList)