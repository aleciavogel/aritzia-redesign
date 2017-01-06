var React = require('react');
var Component = React.Component;

var moment = require('moment');
var _ = require('lodash');
var faker = require('faker');

require('./ProductInfoReviews.css')

class ProductInfoReviews extends Component {
  constructor(props) {
    super(props);
  }
  
  renderReviews() {
    let reviews = [];
    let i = 0;
    _.times(10, () => {
      reviews.push({
        firstName: faker.name.firstName(1),
        lastName: faker.name.lastName(),
        date: faker.date.past(),
        avatar: faker.image.avatar()
      });
    });
        
    return reviews.map( (review) => {
      i++
      let datePosted = moment(review.date).fromNow();
      return (
        <li key={i}>
          <div className="avatar"><img src={review.avatar} /></div>
          <div className="author-info">
            <span>{review.firstName} {review.lastName}</span> <span>{datePosted}</span>
          </div>
        </li>
      );
    });
  }
  
  render() {
    return (     
      <div className="reviews-body">
        Reviews
        <ul>
          {this.renderReviews()}
        </ul>
      </div>
    );
  }
}

module.exports = ProductInfoReviews;