var React = require('react');
var Component = React.Component;

var ProductInfoReviews = require('./tabs/ProductInfoReviews.js');
var ProductInfoSize = require('./tabs/ProductInfoSize.js');
var ProductInfoMaterial = require('./tabs/ProductInfoMaterial.js');

class ProductInfoBody extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    switch(this.props.openTab) {
      case 1:
        return <ProductInfoReviews />
      case 2:
        return <ProductInfoSize />
      case 3:
        return <ProductInfoMaterial />
    }
  }
}

module.exports = ProductInfoBody;