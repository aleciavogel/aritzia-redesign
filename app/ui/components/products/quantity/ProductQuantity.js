var React = require('react');
var Component = React.Component;

require('./ProductQuantity.css');

class ProductQuantity extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {      
    let minusButtonDisabled = this.props.activeQuantity === 1 ? 'disabled' : '',
        plusButtonDisabled = this.props.activeQuantity === 7 ? 'disabled' : '';
    return (
      <div className="product-quantity">
        <div className="amount">Quantity</div>
        <button 
          id="less" 
          className={minusButtonDisabled}
          onClick={this.props.handleActiveQuantityChange}>
          -
        </button>
        <span>{this.props.activeQuantity}</span>
        <button 
          id="more" 
          className={plusButtonDisabled}
          onClick={this.props.handleActiveQuantityChange}>
          +
        </button>
      </div>
    );
  }
}

module.exports = ProductQuantity;