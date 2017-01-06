var React = require('react');
var Component = React.Component;

require('./ProductDescription.css');

var ProductColours = require('../colours/ProductColours.js');
var ProductSizes = require('../sizes/ProductSizes.js');
var ProductQuantity = require('../quantity/ProductQuantity.js');
var ProductAdd = require('../add/ProductAdd.js');
var ProductReviewStars = require('../reviews/ProductReviewStars.js');

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeColour: this.props.product.colours[0],
      activeSize: '',
      activeQuantity: 1,
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
  
  handleActiveQuantityChange(e) {
    let amount = 0,
        newQuantity = this.state.activeQuantity;
    
    if(e.target.id === 'more') {
      amount += 1;
    } else {
      amount -= 1;
    }
    
    newQuantity += amount;
    
    if(newQuantity >= 1 && newQuantity <= 7) {
      this.setState({
        activeQuantity: newQuantity
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
        <ProductQuantity 
          handleActiveQuantityChange={this.handleActiveQuantityChange.bind(this)} 
          activeQuantity={this.state.activeQuantity}/>
        <ProductAdd 
          id={this.props.product.id}/>
      </div>
    );
  }
}

module.exports = ProductDescription;