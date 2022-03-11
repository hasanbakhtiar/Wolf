import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({id,title,img}) => {
  return (
   

    <div className="card col-12 col-sm-12 col-md-4" >
  <div className="card-body">
  <Link to={`/blog/${id}`}> <img src={img} alt="err" width="200" /></Link>
    <h5 className="card-title">{title}</h5>
    <Link to={`/blog/${id}`} className="btn btn-dark">Read More</Link>
  </div>
  </div>
    
   
  )
}

export default BlogListItem