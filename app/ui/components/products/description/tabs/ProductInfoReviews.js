var React = require('react');
var Component = React.Component;
var axios = require('axios');
var moment = require('moment');
var _ = require('lodash');
var Faker = require('faker');

require('./ProductInfoReviews.css');

var ProductReviewStars = require('./ProductReviewStars.js');

class ProductInfoReviews extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reviews: []
    }
  }
  
  componentWillMount() {
    axios.get('https://randomuser.me/api/?results=6&gender=female', {responseType: 'json'})
      .then( (response) => {
        this.setState({
          reviews: response.data.results
        });
      });   
  }
  
  renderReviews() {
    let i = 0;
    let reviews = [];
        
    return this.state.reviews.map( (review) => {
      i++
      const reviewDate = moment(Faker.date.past()).fromNow();
      const reviewContent = Faker.lorem.sentences();
      
      return (
        <li key={i}>
          <div className="avatar"><img src={review.picture.medium} /></div>
          <div className="review-body">
            <div className="author-info">
              <span className="author-name">{review.name.first} {review.name.last}</span>
              <ProductReviewStars />
            </div>
            <div className="author-review">
              {reviewContent}
            </div>
            <div className="author-date">{reviewDate}</div>
          </div>  
        </li>
      );
    });
  }
  
  render() {
    return (     
      <div className="reviews-list">
        <ul>
          {this.renderReviews()}
        </ul>
      </div>
    );
  }
}

module.exports = ProductInfoReviews;