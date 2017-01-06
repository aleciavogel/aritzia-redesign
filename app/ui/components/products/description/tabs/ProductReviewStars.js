var React = require('react');
var Component = React.Component;

var ProductReviewSingleStar = require('./ProductReviewSingleStar.js');

class ProductReviewStars extends Component {
  constructor(props) {
    super(props);
  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  renderStars() {
    const stars = this.getRandomInt(1, 6);
    let starList = [];
    
    for(let i = 0; i < 5; i++) {
      
      if(i <= stars) {
        starList.push('filled-star');
      } else {
        starList.push('empty-star');
      }
    }
    
    console.log(starList);
    
    let j = 0;
    
    return starList.map( (star) => {
      j++;
      return <ProductReviewSingleStar key={j} starState={star} />
    });
  }
  
  render() {
    return (     
      <div className="review-stars">
        {this.renderStars()}
      </div>
    );
  }
}

module.exports = ProductReviewStars;