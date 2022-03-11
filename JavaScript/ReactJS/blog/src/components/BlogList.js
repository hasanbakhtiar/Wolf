import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  return (
      <div className='row'>
         {props.amazon.map(melumat=>{
             return  <BlogListItem key={melumat.id} {...melumat} />
         })}
      </div>
  )
}

const mapStateToProps =(state)=>{
    return{
        amazon:state.amazon
    }
}

export default connect(mapStateToProps)(BlogList)