var React = require('react');
var Component = React.Component;

require('./ProductColours.css');

let ProductSwatch = require('./ProductSwatch.js');

class ProductColours extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentSwatchIndex: 'swatch0'
    }
  }
  
  renderSwatches() {
    let i = -1;
    return this.props.colours.map( (colour) => {
      i++;
      let currentSwatchId = "swatch" + i;
      let swatchClass = currentSwatchId === this.state.currentSwatchIndex ? 'active-swatch' : '';
      return (
        <ProductSwatch
          id={currentSwatchId}
          colour={colour} 
          isActive={swatchClass}
          handleActiveSwatch={this.handleActiveSwatch.bind(this)} 
          key={colour.swatch} />
      );
    });
  }
  
  handleActiveSwatch(e) {
    this.setState({
      currentSwatchIndex: e.target.id
    });
  }
  
  render() {
    return (
      <div className="colour-swatches">
        <ul>
          {this.renderSwatches()}
        </ul>
      </div>
    );
  }
}

module.exports = ProductColours;