var React = require('react');
var Component = React.Component;

require('./ProductInfo.css');

var ProductInfoBody = require('./ProductInfoBody.js');

class ProductInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      step: 2,
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
    let revTab, sizeTab, matTab = '';
    
    if(this.state.step === 1) {
      revTab = 'active-tab';
    } else if(this.state.step === 2) {
      sizeTab = 'active-tab';
    } else {
      matTab = 'active-tab'
    }
    
    return (
      <div className="product-info">
        <div className="product-info-tabs">
          <ul>
            <li>
              <a 
                id="reviews-info" 
                className={revTab}
                href="#" 
                onClick={this.changeCurrentStep.bind(this)}>
                Reviews
              </a>
            </li>
            <li>
              <a 
                id="size-info"
                className={sizeTab} 
                href="#" 
                onClick={this.changeCurrentStep.bind(this)}>
                Sizing &amp; Materials
              </a>
            </li>
          </ul>
        </div>
        <div className="product-info-body">
          <div className="product-inner-wrapper">
            <ProductInfoBody product={this.props.product} openTab={this.state.step} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ProductInfo;