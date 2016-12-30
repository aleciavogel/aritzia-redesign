var React = require('react');
var Component = React.Component;

var Header = require('./Header');
require('./Main.css');
require('./cssreset.css');

class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='main-container'>
        <Header />
        {this.props.children}
      </div>      
    )
  }
};

module.exports = Main;