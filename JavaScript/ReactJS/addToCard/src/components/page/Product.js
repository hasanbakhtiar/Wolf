import React from 'react'
import ProductItem from './ProductItem'
import data from '../data/melumatlar'
import melumatlar from '../data/melumatlar'

const Product = () => {
  return (
    <div>
      <h1 className='text-center'>Product</h1>
      <div className="row">
        {melumatlar.productData.map((item,index)=>{
         return(
         <ProductItem 
        sekil={item.img}
        basliq={item.title} 
        qiymet={item.price} 
        aciqlama={item.desc}/>
        )
        })}
       
    </div>
    </div>
  )
}

export default Product