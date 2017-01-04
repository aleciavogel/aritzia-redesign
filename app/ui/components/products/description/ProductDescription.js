var React = require('react');
var Component = React.Component;

require('./ProductDescription.css');

var ProductColours = require('../colours/ProductColours.js');
var ProductSizes = require('../sizes/ProductSizes.js');
var ProductAdd = require('../add/ProductAdd.js');
var ProductReviewStars = require('../reviews/ProductReviewStars.js');

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeColour: this.props.product.colours[0],
      activeSize: ''
    }
  }
  
  handleActiveColourChange(e) {   
    let colourIndex = this.props.getIndex(e.target.id, this.props.product.colours, 'slug'); 
    this.setState({
      activeColour: this.props.product.colours[colourIndex]
    });
    
    this.props.handleImageChange(colourIndex);
  }
  
  handleActiveSizeChange(e) {
    let sizeIndex = this.props.getIndex(e.target.id, this.state.activeColour.sizes, 'size');
    
    if(this.state.activeColour.sizes[sizeIndex].stock !== 'out') {
      this.setState({
        activeSize: e.target.id
      });
    }
  }
  
  render() {
    return (
      <div className="product-description">
        <div className="product-intro">
          <a href="#" className="product-collection">{this.props.product.collection}</a>
          <h1>
            {this.props.product.name}
          </h1>
          <ProductReviewStars rating="4.0" />
          <div className="prices">
            <span className="reg-price">${this.props.product.regPrice}</span> <span className="sale-price">${this.props.product.salePrice}</span>
          </div>
          <p className="description">
            {this.props.product.notes.designer}
          </p>
        </div>
        <ProductColours 
          colours={this.props.product.colours} 
          activeColour={this.state.activeColour} 
          handleActiveColourChange={this.handleActiveColourChange.bind(this)}/>
        <ProductSizes 
          currentSizes={this.state.activeColour.sizes}
          selectedSize={this.state.activeSize}
          handleActiveSizeChange={this.handleActiveSizeChange.bind(this)} />
        <ProductAdd 
          id={this.props.product.id}/>
      </div>
    );
  }
}

module.exports = ProductDescription;