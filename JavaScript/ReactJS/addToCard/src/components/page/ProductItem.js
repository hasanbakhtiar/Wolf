import React from 'react'

const ProductItem = (props) => {
  return (
   <div className="card col-4 " >
    <img src={props.sekil} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.basliq}</h5>
      <p className="card-text">{props.aciqlama}</p>
      <p className="card-text">{props.qiymet}</p>
      <a href="#" className="btn btn-primary">add to cart</a>
    </div>
  </div>
  )
}

export default ProductItem