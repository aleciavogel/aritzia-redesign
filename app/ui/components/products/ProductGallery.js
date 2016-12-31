var React = require('react');
var Component = React.Component;

require('./ProductGallery.css');

class ProductGallery extends Component {
  render() {
    return (
      <div className="product-images">Product Gallery</div>
    );
  }
}

module.exports = ProductGallery;