var React = require('react');
var Component = React.Component;

require('./ProductSizes.css');

var ProductSizeButton = require('./ProductSizeButton.js')

class ProductSizes extends Component {
  constructor(props) {
    super(props);
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
        <ul>
          {this.renderSizes()}
        </ul>
      </div>
    );
  }
}

module.exports = ProductSizes;