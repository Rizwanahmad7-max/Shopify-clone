import React from 'react';
import "./Kids.css";
import hand from "../../assets/hand.webp";
import arrow from "../../assets/arrow.png";
import ch1 from "../../assets/ch1.jpeg"
import ch2 from "../../assets/ch2.jpeg"
import ch3 from "../../assets/ch3.jpeg"
import ch4 from "../../assets/ch4.jpeg"
import ch5 from "../../assets/ch5.jpeg"

const Kids = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="hero" style={{ backgroundColor: "#0210d1ef" }}>
                {/* LEFT SIDE */}
                <div className="hero-left">
                    <h2>Best Deals! Best Prices!</h2>
                    <div className="hand-hand-icon">
                        <p>New Kids Styles</p>
                        <img src={hand} alt="" height="50px" />
                    </div>
                    <p>Collection</p>
                    <p>for Kids</p>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="hero-right">
                    <div className='bt'>
                        Latest Collections
                        <img style={{ borderRadius: "10px" }} src={arrow} alt="" height="33px" />
                    </div>
                    <img src={ch1} alt="kids" style={{ padding: "10px", borderRadius: "10px" }} height="400px" width="300px" />
                </div>
            </div>

            {/* Kids Products Section */}
            <div className="kids-products">
                <h2>Kids Trending Products</h2>
                <div className="product-grid">
                    {[
                        { name: "Kids T-Shirt", price: "$14.99", img: ch2 },
                        { name: "Cute Dress", price: "$19.99", img: ch3 },
                        { name: "Kids Sneakers", price: "$29.99", img: ch4 },
                        { name: "Kids Jacket", price: "$24.99", img: ch5 },
                    ].map((p, i) => (
                        <div className="product-card" key={i}>
                            <img src={p.img} alt={p.name} />
                            <h3>{p.name}</h3>
                            <p className="price">{p.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))}      




                    
                </div>

{/* dobara kr raha hu */}

<div className="product-grid">
  {[
    { name: "Kids T-Shirt", price: "$14.99", img: ch2 },
    { name: "Cute Dress", price: "$19.99", img: ch3 },
    { name: "Kids Sneakers", price: "$29.99", img: ch4 },
    { name: "Kids Jacket", price: "$24.99", img: ch5 },

    // Duplicate items
    { name: "Kids T-Shirt", price: "$14.99", img: ch2 },
    { name: "Cute Dress", price: "$19.99", img: ch3 },
    { name: "Kids Sneakers", price: "$29.99", img: ch4 },
    { name: "Kids Jacket", price: "$24.99", img: ch5 },
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

export default Kids;
