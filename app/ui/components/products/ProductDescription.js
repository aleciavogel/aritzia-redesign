var React = require('react');
var Component = React.Component;

require('./ProductDescription.css');

var ProductColours = require('./ProductColours.js');
var ProductSizes = require('./ProductSizes.js');

class ProductDescription extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="product-description">
        <div className="product-intro">
          <a href="#" className="product-collection">{this.props.product.collection}</a>
          <h1>
            {this.props.product.name}
          </h1>
          <div className="prices">
            <span className="reg-price">${this.props.product.regPrice}</span> <span className="sale-price">${this.props.product.salePrice}</span>
          </div>
          <p className="description">
            {this.props.product.notes.designer}
          </p>
        </div>
        <ProductColours />
        <ProductSizes />
      </div>
    );
  }
}

module.exports = ProductDescription;