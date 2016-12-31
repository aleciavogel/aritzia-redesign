var React = require('react');
var Component = React.Component;

require('./ProductContainer.css');

var ProductGallery = require('../components/products/ProductGallery.js');
var ProductDescription = require('../components/products/ProductDescription.js');

class ProductContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="product-container">
        <ProductGallery />
        <ProductDescription />
      </div>
    );
  }
}

module.exports = ProductContainer;