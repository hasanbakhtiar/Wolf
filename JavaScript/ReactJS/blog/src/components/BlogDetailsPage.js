import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'

const BlogDetailsPage = (props) => {
  return (
    <div>
        <BlogDetailsItem {...props.blogInfo}/>
    </div>
  )
}
const mapStateToProps =(state,props)=>{
    return{
            blogInfo: state.amazon.find((blog)=>{
                return blog.id === props.match.params.id
            })
    }
}

export default connect (mapStateToProps)(BlogDetailsPage)