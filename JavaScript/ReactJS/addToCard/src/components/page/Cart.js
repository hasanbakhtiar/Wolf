import React from 'react'

import { useCart } from 'react-use-cart'

const Cart = () => {
  const {isEmpty,
totalUniqueItems,items,
totalItems,
updateItemQuantity,
cartTotal,
removeItem,
emptyCart
    
  }=useCart();
  if(isEmpty) return <h1 className='text-center'>Sizin sebetiniz boshdur</h1>
  return (
    <div>
        <h1 className='text-center'>Basket</h1>
        {/* melumati carta elve etmek
            bunun hesablanmasi
            silinmesi 
            tek ve hamisi        
        */}

        <section className='py-4 container'>
          <div className='col-auto ms-auto d-flex align-items-center 
          justify-content-center w-100'>
            <h2>Total Price</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <h5>Cart ({totalUniqueItems}) total items:({totalItems})</h5>
            </div>
          </div>

          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Images</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item,index)=>{
      return (
         <tr>
      <th scope="row">1</th>
      <td>
        <img width="100" src={item.img} alt="" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}$</td>
      <td>
        <button className='btn btn-danger ms-2'
         onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
         {item.quantity}
          <button className='btn btn-danger ms-2'
         onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
      </td>
      <td><button className='btn btn-success' onClick={()=>removeItem(item.id)}>Remove Item</button></td>
    </tr>
      )
    })}
   
  <h5 className="text-center">
    Total Price: {cartTotal}
  </h5>
  <button onClick={()=>emptyCart()} className="btn btn-danger">Empty Cart</button>
  </tbody>
</table>
        </section>


        </div>
  )
}

export default Cart