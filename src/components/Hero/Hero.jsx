 import React from 'react'
import "./Hero.css"
import hand from "../../assets/hand.webp"
import arrow from "../../assets/arrow.png"
import fm from "../../assets/fm.jpeg"
import sm from "../../assets/sm.jpeg"
import cs from "../../assets/cs.jpeg"
import cp from "../../assets/cp.jpeg"
import ss1 from "../../assets/ss1.jpeg"
import ss from "../../assets/ss.jpeg"
import bs from "../../assets/bs.jpeg"
import j from "../../assets/j.jpeg"

const Hero = () => {
  return (<>
     <div className="hero" style={{ backgroundColor: "green" }}>


      {/* LEFT SIDE */}
      <div className="hero-left">
        <h2>Best Deals! Best Prices!</h2>

        <div className="hand-hand-icon">
          <p>styles</p>
          <img src={hand} alt="" height="50px" />
        </div>

        <p>Collection</p>
        <p>for everyone</p>

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
  borderRadius: " rgba(3, 196, 170, 0.63) 10px",
  display: "inline-block"
}}



 src={fm} alt="" height="400px" width="300px" />
      </div>



    </div>   

  <div className="hero" style={{ backgroundColor: "red" }}>


      {/* LEFT SIDE */}
      <div className="hero-left">
        <h2>Best Deals! Best Prices!</h2>

        <div className="hand-hand-icon">
          <p>New Styles...</p>
          <img src={hand} alt="" height="50px" />
        </div>

        <p>Collection</p>
        <p>for "Mens"</p>

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
  borderRadius: " rgba(3, 196, 170, 0.63) 10px",
  display: "inline-block"
}}



 src={sm} alt="" height="400px" />
      </div>



    </div>
    
    
    <div className="men-products">
  <h2>Men’s Trending Products</h2>

  <div className="product-grid">
    {[
      {
        name: "Men's Casual Shirt",
        price: "$34.99",
        img:  bs
      },
      {
        name: "Stylish Sneakers",
        price: "$59.99",
        img:  ss1
      },
      {
        name: "Men's Denim Jacket",
        price: "$69.99",
        img:  j
      },
      {
        name: "Black T-Shirt",
        price: "$19.99",
        img: fm  // ← yahan apni local image use karna
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

    
    <div className="men-products">
  <h2>Men’s Trending Products</h2>

  <div className="product-grid">
    {[
      {
        name: "Men's Casual Shirt",
        price: "$34.99",
        img: sm
      },
      {
        name: "Stylish Sneakers",
        price: "$59.99",
        img:  ss
      },
      {
        name: "Men's Denim Jacket",
        price: "$69.99",
        img:  cp
      },
      {
        name: "Black T-Shirt",
        price: "$19.99",
        img: cs // ← yahan apni local image use karna
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
</div>   is ki css
    
    
    
     </>

  )
}

export default Hero
