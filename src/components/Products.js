import React from 'react'

export default function Products({ products, addToCart }) {
  

  return (
    <>
      <section>

      
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-single">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => { addToCart(product.id) }}>Add To Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
