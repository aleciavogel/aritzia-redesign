var React = require('react');
var Component = React.Component;

class ProductSizeButton extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let stockClass = `stock-${this.props.size.stock}`;
    
    if(this.props.isActiveSize) {
      stockClass += ` active-size`;
    }
    
    return (
      <li
        className={stockClass} 
        id={this.props.size.size} 
        onClick={this.props.handleActiveSizeChange.bind(this)}>
        {this.props.size.size} 
      </li>
    );
  }
}

module.exports = ProductSizeButton;