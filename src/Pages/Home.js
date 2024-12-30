import React from 'react'
import Navbar from '../Components/Navbar'
import '../css/Home.css'
import firstBgImg from '../assets/images/bg_p1.jpg'
import Footer from '../Components/Footer'
import ProductsItem from './ProductsItem'
import { FaCartShopping } from "react-icons/fa6"
// import ProductList from './ProductList'


const Home = ({product}) => {

  const imgStyle = {
    backgroundImage: `url(${firstBgImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
    position: 'relative',
    // opacity: 1,
  };



  return (
    <>
      <Navbar />
      <div className='large-bg-img' style={imgStyle}>
        <div className='blur'></div>

        <div className='first-st'>
          <h1 className='main-header'>Gift for your skin</h1>
          <p className='per'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Imernatur omnis, rerum a id.</p>
          <button className='b1'>Shop Now</button>
        </div>
      </div>

      {/* Our Products */}

      <div className='products-slice'>
        <h2>Our Products</h2>
        <div className='btns'>
          <button>
            <a href="">Best-sellers</a>
          </button>
          <button>
            <a href="">New-Products</a>
          </button>
        </div>

        <div className='product-list'>
          {/* <ProductsItem /> */}

          <div className='single_product'>
            <div className='images'>
              <img src={product.img}
               alt={product.name} />
            </div>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div className='extra'>
              <div><h3>{product.price}</h3></div>
              <button><FaCartShopping /></button>
            </div>
          </div>


        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home
