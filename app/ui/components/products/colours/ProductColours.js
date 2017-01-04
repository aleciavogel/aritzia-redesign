var React = require('react');
var Component = React.Component;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

require('./ProductColours.css');

let ProductSwatch = require('./ProductSwatch.js');

class ProductColours extends Component {
  constructor(props) {
    super(props);
  }
  
  renderSwatches() {
    let i = -1;
    return this.props.colours.map( (colour) => {
      let swatchClass = colour.slug === this.props.activeColour.slug ? 'active-swatch' : '';
      return (
        <ProductSwatch
          colour={colour}
          isActive={swatchClass}
          handleActiveSwatch={this.props.handleActiveColourChange.bind(this)} 
          key={colour.swatch} />
      );
    });
  }
  
  render() {
    return (
      <div className="colour-swatches">
        <div>Colour: <span>{this.props.activeColour.name}</span>
        </div>
        <ul>
          {this.renderSwatches()}
        </ul>
      </div>
    );
  }
}

module.exports = ProductColours;