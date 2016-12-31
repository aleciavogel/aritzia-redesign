var React = require('react');
var Component = React.Component;

require('./ProductDescription.css');

class ProductDescription extends Component {
  render() {
    return (
      <div className="product-description">Product Description</div>
    );
  }
}

module.exports = ProductDescription;