import React from 'react'
import BlogForm from './BlogForm';
import { blogEdit,blogRemove } from '../actions/blogs';
import { connect } from 'react-redux';

const EditBlogPage = (props) => {
  return (
    <div> 
        <h1 className='text-center'>EditBlogPage</h1>
        <BlogForm blog = {props.blog}
        onSubmit= {(blog)=>{
            props.dispatch(blogEdit(props.blog.id, blog));
            props.history.push('/blog');
        }}
        />
        <button className='btn btn-danger' onClick={()=>{
                props.dispatch(blogRemove({id:props.blog.id}))
                props.history.push('/blog')
        }}>Delete</button>
    </div>
  )
}

const mapStateToProps =(state, props)=>{
    return{
        blog:state.amazon.find((b)=>{
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage)