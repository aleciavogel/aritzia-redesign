var React = require('react');
var Component = React.Component;

class ProductMainImage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="current-image">
        <img src={this.props.currentImage} />
      </div>
    );
  }
}

module.exports = ProductMainImage;