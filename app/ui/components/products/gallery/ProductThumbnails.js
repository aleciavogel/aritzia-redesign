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
      
      let activeImageClass = '';
      
      if (image === this.props.activeImage) {
        activeImageClass = 'active-thumbnail';
      }
      return (
        <li key={i} className={activeImageClass}>
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