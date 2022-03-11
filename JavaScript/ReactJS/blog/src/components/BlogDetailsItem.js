import React from 'react'

const BlogDetailsItem = ({id,title,description,dataAdded,img}) => {
  return (

    <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"> id</th>
      <th scope="col">photo</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{id}</td>
      <td><img src={img} alt="err" width="100" /></td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{dataAdded}</td>
    </tr>
    
  </tbody>
</table>
   
  )
}

export default BlogDetailsItem