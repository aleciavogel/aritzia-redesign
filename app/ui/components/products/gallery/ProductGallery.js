var React = require('react');
var Component = React.Component;

require('./ProductGallery.css');

var ProductThumbnails = require('./ProductThumbnails.js');
var ProductMainImage = require('./ProductMainImage.js');

class ProductGallery extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="product-gallery">
        <ProductMainImage currentImage={this.props.currentImage} />
        <ProductThumbnails images={this.props.images} handleImageChange={this.props.handleImageChange.bind(this)} />
      </div>
    );
  }
}

module.exports = ProductGallery;