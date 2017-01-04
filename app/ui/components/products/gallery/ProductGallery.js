var React = require('react');
var Component = React.Component;

require('./ProductGallery.css');

var ProductThumbnails = require('./ProductThumbnails.js');
var ProductMainImage = require('./ProductMainImage.js');

class ProductGallery extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentImage: this.props.images[0]
    }
  }
  
  handleImageChange(e) {
    this.setState({
      currentImage: e.target.src
    });
  }
  
  render() {
    return (
      <div className="product-gallery">
        <ProductMainImage currentImage={this.state.currentImage} />
        <ProductThumbnails images={this.props.images} handleImageChange={this.handleImageChange.bind(this)} />
      </div>
    );
  }
}

module.exports = ProductGallery;