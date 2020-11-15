import React from 'react'

export default function Cart({ cartItems }) {
  

  return (
    <>
      <section>
        <h2>Your Cart</h2>
        <div className="products__cart">
          {cartItems.map((item) => (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.price}</p>
              <p>{item.count}</p>
            </div>  
          ))}
        </div>
      </section>
    </>
  )
}
