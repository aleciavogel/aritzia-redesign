var React = require('react');
var Component = React.Component;

require('./ProductSizes.css');

class ProductSizes extends Component {
  constructor(props) {
    super(props);
  }
  
  renderSizes() {
    console.log('rendering sizes');
    return this.props.currentSizes.map( (size) => {
      let stockClass = `stock-${size.stock}`;
      return (
        <li key={size.size} className={stockClass}>
          {size.size}
        </li>
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