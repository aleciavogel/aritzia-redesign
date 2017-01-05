var React = require('react');
var Component = React.Component;

const $ = require('jquery/dist/jquery.min.js');

class ProductThumbnails extends Component {
  constructor(props) {
    super(props);
  }
  
  renderThumbnails(images) {
    let i = -1;
    return images.map( (image) => {
      let activeImageClass = '';
      i++;
      
      if (image === this.props.activeImage) {
        activeImageClass = 'active-thumbnail';
      }
      return (
        <li key={i} className={activeImageClass}>
          <img src={image} onClick={this.props.handleImageChange}/>
        </li>
      );
    });
  }
  
  listDidMount(node) {
    if (node) {
      node.addEventListener('scroll', () => {
        let pos = $(node).scrollLeft(),
            width = $(node).width(),
            scrollWidth = $(node).get(0).scrollWidth;
            
        if(scrollWidth - width === pos) {
          $('#right').addClass('too-far');
        } else if(pos === 0) {
          $('#left').addClass('too-far');
        }
        
        if(scrollWidth - width != pos) {
          $('#right').removeClass('too-far');
        }
        
        if(pos > 0) {
          $('#left').removeClass('too-far');
        }
      })
    }
  };  
  
  scroll(e) {
    const thumbnails = $('#thumbnails');
    let distance = 200;
    let isScrollingLeft = e.target.id === 'right';
    const startX = thumbnails.scrollLeft(); // Position of horizontal scrollbar
    const scrollWidth = $(thumbnails).get(0).scrollWidth - $(thumbnails).width; // Width of the scrollbar
    let scrollTarget = isScrollingLeft ? startX + distance : startX - distance;
    
    // Check if the target exceeds how far the scrollbar can go and adjust the distance accordingly
    if(scrollTarget < 0) {
      scrollTarget = 0;
    } else if(scrollTarget >= scrollWidth) {
      scrollTarget = scrollWidth;
    }
    
    // Smooth scroll animation
    thumbnails.animate({
      scrollLeft: scrollTarget
    });
  }
  
  render() {
    return (
      <div className="product-thumbnails">
        <span 
          id="left" 
          onClick={this.scroll}
          className='too-far'>
          &larr;
        </span>
        <ul ref={this.listDidMount} id="thumbnails">
          {this.renderThumbnails(this.props.images)}
        </ul>
        <span 
          id="right" 
          onClick={this.scroll}>
          &rarr;
        </span>
      </div>
    );
  }
}

module.exports = ProductThumbnails;