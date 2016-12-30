var React = require('react');
var Component = React.Component;

require('./Footer.css');

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-cta">
          
        </div>
        <div className="links">
          <div className="footer-container">
            <div>
              <span>Get Help</span>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns &amp; Exchanges</a></li>
                <li><a href="#">Payment &amp; Security</a></li>
                <li><a href="#">Order Tracking</a></li>
                <li><a href="#">Special Orders</a></li>
              </ul>
            </div>
            <div>
              <span>Aritzia</span>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Store Locator</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Social Responsibility</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Find a Wishlist</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">#ThanksToYou</a></li>
              </ul>
            </div>
            <div>
              <span>Join Aritzia's Mailing List</span>
              <p>Insider info on sales, new arrivals, and more good stuff.</p>
              <form>
                <input type="text" /><button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="need-to-talk">
          <div className="footer-container">
            <div className="left">
              <span>Need to talk?</span>
              <p>Help us, help you! Give us a call at <a href="tel:1-855-274-8942">1-855-ARITZIA (274-8942)</a> and let's chat - we're always here to help.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;