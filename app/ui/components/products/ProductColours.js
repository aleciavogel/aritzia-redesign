var React = require('react');
var Component = React.Component;

require('./ProductColours.css');

class ProductColours extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>Colour Swatches go here</div>
    );
  }
}

module.exports = ProductColours;