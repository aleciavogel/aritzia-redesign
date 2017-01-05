var React = require('react');
var Component = React.Component;

require('./ProductSizes.css');

var ProductSizeButton = require('./ProductSizeButton.js')

class ProductSizes extends Component {
  constructor(props) {
    super(props);
  }
  
  sizesUnavailable() {
    let allInStock = true;
    for (let size of this.props.currentSizes) {
      if(size.stock === 'out') {
        allInStock = false;
        break;
      }
    }
    return !allInStock;
  }
  
  renderSizes() {
    return this.props.currentSizes.map( (size) => {
      let isActiveSize = this.props.selectedSize === size.size;
      return (
        <ProductSizeButton
          key={size.size}
          handleActiveSizeChange={this.props.handleActiveSizeChange.bind(this)}
          size={size}
          isActiveSize={isActiveSize} />
      );
    });
  }
  
  render() {
    return (
      <div className="product-sizes">
        <div className="product-size-title">
          <span>Size</span><a href="#">Size chart</a>
        </div>
        <ul>
          {this.renderSizes()}
        </ul>
        {this.sizesUnavailable() && <Alert />}
      </div>
    );
  }
}

class Alert extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="stock-out-cta">
        Is your size unavailable for this colour? <a href="#">Get notified when it's back in stock</a>
      </div>
    );
  }
}




module.exports = ProductSizes;