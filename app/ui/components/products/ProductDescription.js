var React = require('react');
var Component = React.Component;

require('./ProductDescription.css');

var ProductColours = require('./ProductColours.js');
var ProductSizes = require('./ProductSizes.js');
var ProductAdd = require('./ProductAdd.js');

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeColour: this.props.product.colours[0],
    }
  }
  
  getColourIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i][prop] === value) {
        return i
      }
    }
    return -1;
  }
  
  handleActiveColourChange(e) {   
    let colourIndex = this.getColourIndex(e.target.id, this.props.product.colours, 'slug'); 
    this.setState({
      activeColour: this.props.product.colours[colourIndex]
    });
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
          activeColour={this.state.activeColour.slug} 
          handleActiveColourChange={this.handleActiveColourChange.bind(this)}/>
        <ProductSizes 
          currentSizes={this.state.activeColour.sizes} />
        <ProductAdd 
          id={this.props.product.id}/>
      </div>
    );
  }
}

module.exports = ProductDescription;