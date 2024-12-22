import React from 'react'
import Navbar from '../Components/Navbar'
import '../css/Home.css'
import firstBgImg from '../assets/images/bg_p1.jpg'
import Footer from '../Components/Footer'


const Home = () => {

  const imgStyle = {
    backgroundImage:`url(${firstBgImg})`,
    backgroundSize:'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
    // opacity: 1,
  };

  return (
    <>
    <Navbar />
      <div className='large-bg-img' style={imgStyle}>
        <div className='first-st'>
          <h1 className='main-header'>Gift for your skin</h1>
          <p className='per'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Imernatur omnis, rerum a id.</p>
          <button className='b1'>Shop Now</button>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Home
