var React = require('react');
var Component = React.Component;

require('./ProductAdd.css');

class ProductAdd extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="product-add">
        <button type="button">Add to Bag</button>
        <div className="product-utilities">
          <a href="#">Add To Wishlist</a><span>Item # {this.props.id}</span>
        </div>
      </div>
    );
  }
}

module.exports = ProductAdd;