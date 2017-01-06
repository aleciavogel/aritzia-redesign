var React = require('react');
var Component = React.Component;

require('./Header.css');

class Header extends Component {  
  render() {
    return (
      <header>
        <div className="utilities">
          <div>
            <ul>
              <li className="country-select">
                <span className="ar-icon cdn-flag"></span>
                <a href="#">
                  Canada ($CAD)
                </a>              
              </li>
              <li className="language-select"><a href="#">FR</a></li>
              <li className="store-select"><a href="#">Store Locator</a></li>
              <li className="careers"><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">Search <span className="ar-icon" id="search"></span></a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Sign In</a></li>
            </ul>
          </div>
        </div>
        <div className="logo">
          <img src="https://github.com/aleciavogel/aritzia-redesign/blob/master/app/public/images/aritzia_logo.gif?raw=true" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

module.exports = Header;