import React from 'react'

const BlogListItem = ({description,title}) => {
  return (
    <>
    <li>{title}-{description}</li>
    </>
  )
}

export default BlogListItem