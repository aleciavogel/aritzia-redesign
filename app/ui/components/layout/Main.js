var React = require('react');
var Component = React.Component;

var Header = require('./Header');
var Footer = require('./Footer.js');

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
        <Footer />
      </div>      
    )
  }
};

module.exports = Main;