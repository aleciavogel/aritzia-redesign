var React = require('react');
var Component = React.Component;

require('./ProductReviewStars.css');

class ProductReviewStars extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="rating-stars">
        <svg className="filled-star" version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 53.867 53.867">
        <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
          10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
        </svg><svg className="filled-star" version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 53.867 53.867">
        <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
          10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
        </svg><svg className="filled-star" version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 53.867 53.867">
        <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
          10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
        </svg><svg className="filled-star" version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 53.867 53.867">
        <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
          10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
        </svg><svg version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 53.867 53.867">
        <polygon points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
          10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
        </svg> <span className="text">{this.props.rating}</span><span className="ar-icon arrow-right"></span><span className="text">143 Reviews</span> <span className="ar-icon arrow-right"></span><span className="text">Write a Review</span>
      </div>
    );
  }
}

module.exports = ProductReviewStars;