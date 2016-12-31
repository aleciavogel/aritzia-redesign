var React = require('react');
var Component = React.Component;

require('./ProductDescription.css');

class ProductDescription extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="product-description">{this.props.product.collection}</div>
    );
  }
}

module.exports = ProductDescription;