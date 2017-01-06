var React = require('react');
var Component = React.Component;
var Faker = require('faker');
var moment = require('moment');
const $ = require('jquery/dist/jquery.min.js');

var Header = require('./Header.js');
var Footer = require('./Footer.js');
var ProductContainer = require('../../containers/ProductContainer.js');

require('./Main.css');
require('./cssreset.css');

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

class Main extends Component {
  constructor(props) {
    super(props);
    
    let chosenNumber = this.getRandomInt(1, 6);
    
    this.state = {
      showCoupon: chosenNumber === 4 ? true : false
    }
  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  render() {
    return (
      <div className='main-container'>
        <Header />
        {this.state.showCoupon && <SurpriseCoupon />}
        <ProductContainer />
        <Footer />
      </div>      
    )
  }
};

class SurpriseCoupon extends Component {
  constructor(props) {
    super(props);
    
    let words = Faker.commerce.productAdjective() + Faker.commerce.productAdjective() + '10FS';
    
    words = words.split(" ").join();
    
    moment.duration(1, 'hours');
    
    this.state = {
      couponCode: words,
      now: new Date(),
      expiryDate: new Date().addHours(1)
    }
  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  componentDidMount() {
    setTimeout(function() {
      $("#free-code").slideToggle();
    }, 20000);
  }
  
  render() {
    let expiryTime = moment(this.state.expiryDate).fromNow();
    return (
      <div id="free-code">
        <div className="free-code-wrapper">
          <h2>Congratulations!</h2>
          <p>You've won free shipping and 20% off of your total purchase (including sale and clearance items) just for shopping with us.</p>
          <p>The discount code <strong><u>{this.state.couponCode}</u></strong> has been automatically applied to your bag - but hurry! It expires <u>{expiryTime}</u> .</p>
          <p id="end-of-code"><strong>Happy shopping!</strong></p>
        </div>
      </div>
    );
  }
}

module.exports = Main;