var React = require('react');
var Component = React.Component;

class ProductThumbnails extends Component {
  constructor(props) {
    super(props);
  }
  
  renderThumbnails(images) {
    let i = -1;
    return images.map( (image) => {
      i++;
      return (
        <li key={i}>
          <img src={image} onClick={this.props.handleImageChange}/>
        </li>
      );
    });
  }
  
  render() {
    return (
      <div className="product-thumbnails">
        <ul>
          {this.renderThumbnails(this.props.images)}
        </ul>
      </div>
    );
  }
}

module.exports = ProductThumbnails;