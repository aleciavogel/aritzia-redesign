var React = require('react');
var Component = React.Component;

require('./ProductInfo.css');

class ProductInfo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="product-info">
        <div className="product-info-tabs">
          <ul>
            <li><span>Size & Fit</span></li>
            <li><span>Materials & Care</span></li>
            <li><span>Reviews</span></li>
          </ul>
        </div>
        <div className="product-info-body">
          
        </div>
      </div>
    );
  }
}

module.exports = ProductInfo;