var React = require('react');
var Component = React.Component;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class ProductMainImage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="current-image">
        <ReactCSSTransitionGroup
          className="current-image"
          transitionName="fade"
          transitionEnter={true}
          transitionEnterTimeout={300}
          transitionLeave={true}
          transitionLeaveTimeout={300}>
          <img className="current-image" src={this.props.currentImage} key={this.props.currentImage} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

module.exports = ProductMainImage;