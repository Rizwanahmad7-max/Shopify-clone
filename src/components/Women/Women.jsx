 import React from 'react'
import "./Women.css"
import hand from "../../assets/hand.webp"
import arrow from "../../assets/arrow.png"
import bags from "../../assets/bags.jpeg"
import dosri from "../../assets/dosri.jpeg"
import summer from "../../assets/summer.jpeg"
import hb from "../../assets/hb.jpeg"
import wj from "../../assets/wj.jpeg"
import wk from "../../assets/wk.jpeg"
const Women = () => {
  return (<> 
    




    <div className='hero' style={{ backgroundColor: "red" }}>


      {/* LEFT SIDE */}
      <div className="hero-left">
        <h2>Best Deals! Best Prices!</h2>

        <div className="hand-hand-icon">
          <p>Stylish brands</p>
          <img src={hand} alt="" height="50px" />
        </div>

        <p>Collection</p>
        <p>for womens</p>

        {/* BUTTON */}
        <div className="hero-latest-btn">
          <div id='jj'>
              
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-right">
        <div className='bt'>Latest Collections 
        
            <img style={{ borderRadius: "10px" }}
 src={arrow} alt="" height="33px" /> </div>
        <img 
 style={{
  backgroundColor: "",
  padding: "10px",
  borderRadius: " rgba(177, 196, 3, 0.63) 10px",
  display: "inline-block"
}}



 src={bags} alt="" height="400px" />
      </div>

    </div>

{/* next women */}
 


    <div className='hero' style={{ backgroundColor: "yellow" }}>

      {/* LEFT SIDE */}
      <div className="hero-left">
        <h2>Best Deals! Best Prices!</h2>

        <div className="hand-hand-icon">
          <p>Stylish brands</p>
          <img src={hand} alt="" height="50px" />
        </div>

        <p>Collection</p>
        <p>for womens</p>

        {/* BUTTON */}
        <div className="hero-latest-btn">
          <div id='jj'>
              
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-right">
        <div className='bt'>Latest Collections 
        
            <img style={{ borderRadius: "10px" }}
 src={arrow} alt="" height="33px" /> </div>
        <img 
 style={{
  backgroundColor: "",
  padding: "10px",
  borderRadius: " rgba(177, 196, 3, 0.63) 10px",
  display: "inline-block"
}}



 src={dosri} alt="" height="400px" />
      </div>

    </div>           





    {/* WOMEN PRODUCT LIST SECTION */}
<div className="women-products">
  <h2>Women’s Trending Products</h2>

  <div className="product-grid">
    {[
      {
        name: "Summer Floral Dress",
        price: "$29.99",
        img: summer
      },
      {
        name: "Stylish Hand Bag",
        price: "$39.99",
        img:  hb
      },
      {
        name: "Women's Jacket",
        price: "$49.99",
        img:  wj
      },
      {
        name: "Classic Kurti",
        price: "$24.99",
        img:  wk
      }
    ].map((p, i) => (
      <div className="product-card" key={i}>
        <img src={p.img} alt={p.name} />
        <h3>{p.name}</h3>
        <p className="price">{p.price}</p>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
</div> 
      








    </>
  )
}

export default Women
