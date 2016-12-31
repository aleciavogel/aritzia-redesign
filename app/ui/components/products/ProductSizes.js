var React = require('react');
var Component = React.Component;

require('./ProductSizes.css');

class ProductSizes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="product-sizes">
        Sizes go here.
      </div>
    );
  }
}

module.exports = ProductSizes;