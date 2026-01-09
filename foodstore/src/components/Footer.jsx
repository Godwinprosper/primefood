import { Link } from 'react-router';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className='footer-details'>
          <div className="footer-card">
            <h3>Contact Us</h3>
            <p>Email: info@foodstore.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-card">
            <h3>Follow Us</h3>
            <Link to="/linkedin" className='footer-links'><p>Instagram</p></Link>
            <Link to="/linkedin" className='footer-links'><p>Facebook</p></Link>
            <Link to="/linkedin" className='footer-links'><p>Twitter</p></Link>
            <Link to="/linkedin" className='footer-links'><p>X</p></Link>
            
          </div>
          <div className="footer-card footer-branding">
            <h3>Prime Heaven</h3>
            <p>Your favorite food delivered fast at your door.</p>
          </div>
        </div>

        <div >
          <p className='copyright'>&copy; 2024 FoodStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}