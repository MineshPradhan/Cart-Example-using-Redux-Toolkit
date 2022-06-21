import React from 'react'
import Products from '../components/Products.js'

const Home = () => {
  return (
    <div>
        <h2 className='heading'>Using Redux Toolkit and it's a store</h2>
        <section>
            <h3 className='products'>Products</h3>
            <Products />
        </section>
    </div>
  )
}

export default Home