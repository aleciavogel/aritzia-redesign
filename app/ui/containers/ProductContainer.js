var React = require('react');
var Component = React.Component;
require('./ProductContainer.css');

class ProductContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="product-container">This is the product container</div>
    );
  }
}

module.exports = ProductContainer;