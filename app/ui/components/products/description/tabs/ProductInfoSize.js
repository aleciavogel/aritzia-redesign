var React = require('react');
var Component = React.Component;

require('./ProductInfoSize.css');

class ProductInfoSize extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (     
      <div className="size-body">
        <div class="size">
          <span className="column-title">Size &amp; Fit</span>
          <ul>
            <li><span>Fit:</span> {this.props.notes.fit}</li>
            <li><span>Sizing:</span> {this.props.notes.sizing}</li>
            <li>{this.props.notes.model}</li>
          </ul>
        </div>
        <div class="materials">
          <span className="column-title">Materials &amp; Care</span>
          <ul>
            <li><span>Origin:</span> {this.props.notes.materials.origin}</li>
            <li><span>Materials:</span> {this.props.notes.materials.content}</li>
            <li><span>Care:</span> {this.props.notes.materials.care}</li>
            <li>Imported</li>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = ProductInfoSize;