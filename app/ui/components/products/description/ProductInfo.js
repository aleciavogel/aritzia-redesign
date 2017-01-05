var React = require('react');
var Component = React.Component;

require('./ProductInfo.css');

var ProductInfoBody = require('./ProductInfoBody.js');

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      step: 1
    }
  }
  
  changeCurrentStep(e) {
    e.preventDefault();
    let newStep = 1;
    
    console.log(newStep);
    
    if(e.target.id === 'reviews-info') {
      newStep = 1;
    } else if(e.target.id === 'size-info') {
      newStep = 2;
    } else {
      newStep = 3;
    }
    
    this.setState({
      step: newStep
    });
  }
  
  render() {
    return (
      <div className="product-info">
        <div className="product-info-tabs">
          <ul>
            <li><a id="reviews-info" href="#" onClick={this.changeCurrentStep.bind(this)}>Reviews</a></li>
            <li><a id="size-info" href="#" onClick={this.changeCurrentStep.bind(this)}>Size & Fit</a></li>
            <li><a id="materials-info" href="#" onClick={this.changeCurrentStep.bind(this)}>Materials & Care</a></li>
          </ul>
        </div>
        <div className="product-info-body">
          <div className="product-inner-wrapper">
            <ProductInfoBody openTab={this.state.step} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ProductInfo;