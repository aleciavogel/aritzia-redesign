var React = require('react');
var Component = React.Component;

class ProductSwatch extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let swatchUrl = `url(${this.props.colour.swatch})`;
    return (
      <li
        className={this.props.isActive} 
        onClick={this.props.handleActiveSwatch.bind(this)} >
        <span 
          id={this.props.id}
          style={{'backgroundImage': swatchUrl}}></span>
      </li>
    );
  }
}

module.exports = ProductSwatch;