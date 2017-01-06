var React = require('react');
var Component = React.Component;

var ProductInfoReviews = require('./tabs/ProductInfoReviews.js');
var ProductInfoSize = require('./tabs/ProductInfoSize.js');

class ProductInfoBody extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    switch(this.props.openTab) {
      case 1:
        return <ProductInfoReviews />
      case 2:
        return <ProductInfoSize notes={this.props.product.notes} />
    }
  }
}

module.exports = ProductInfoBody;