var React = require('react');
var Component = React.Component;

var ProductInfoReviews = require('./tabs/ProductInfoReviews.js');
var ProductInfoSize = require('./tabs/ProductInfoSize.js');
var ProductInfoLook = require('./tabs/ProductInfoLook.js');

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
      case 3:
        return <ProductInfoLook/>
    }
  }
}

module.exports = ProductInfoBody;