import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Micro Marketplace</h3>
          <p>Your one-stop shop for Microsoft & Xbox products.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Favorites</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@micromarket.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Micro Marketplace. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
