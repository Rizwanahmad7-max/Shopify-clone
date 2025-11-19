import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-section">
        <h3>Shopify</h3>
        <p>Best deals, best prices, best quality.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: support@shopify.com</p>
        <p>Phone: +92 300 0000000</p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shopify – All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
