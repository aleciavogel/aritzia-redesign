var React = require('react');
var Component = React.Component;

require('./ProductContainer.css');

var ProductGallery = require('../components/products/gallery/ProductGallery.js');
var ProductDescription = require('../components/products/description/ProductDescription.js');
var ProductInfo = require('../components/products/description/ProductInfo.js');

const product = {
  collection: 'Wilfred Free',
  name: 'Faretta Sweater',
  id: 62947,
  colours: [
    {
      name: 'Black',
      slug: 'black',
      swatch: 'http://s7d9.scene7.com/is/image/Aritzia/swatch/f16_07_a03_62947_1274_sw.jpg',
      image: 'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_a.jpg',
      sizes: [
        { 
          size: 'xxs',
          stock: 'low'
        },
        {
          size: 'xs',
          stock: 'out'
        },
        {
          size: 's',
          stock: 'low'
        },
        {
          size: 'm',
          stock: 'out'
        },
        {
          size: 'l',
          stock: 'out'
        },
        {
          size: 'xl',
          stock: 'out'
        }
      ],
    },
    {
      name: 'Heather Charcoal',
      slug: 'heather-charcoal',
      swatch: 'http://s7d9.scene7.com/is/image/Aritzia/swatch/f16_07_a03_62947_6046_sw.jpg',
      image: 'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_6046_on_a.jpg',
      sizes: [
        { 
          size: 'xxs',
          stock: 'low'
        },
        {
          size: 'xs',
          stock: 'low'
        },
        {
          size: 's',
          stock: 'low'
        },
        {
          size: 'm',
          stock: 'low'
        },
        {
          size: 'l',
          stock: 'low'
        },
        {
          size: 'xl',
          stock: 'low'
        }
      ],
    },
    {
      name: 'Heather Herring',
      slug: 'heather-herring',
      swatch: 'http://s7d9.scene7.com/is/image/Aritzia/swatch/f16_07_a03_62947_10359_sw.jpg',
      image: 'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_10359_off_a.jpg',
      sizes: [
        { 
          size: 'xxs',
          stock: 'out'
        },
        {
          size: 'xs',
          stock: 'out'
        },
        {
          size: 's',
          stock: 'low'
        },
        {
          size: 'm',
          stock: 'out'
        },
        {
          size: 'l',
          stock: 'low'
        },
        {
          size: 'xl',
          stock: 'out'
        }
      ],
    }
  ],
  regPrice: '125',
  salePrice: '118',
  notes: {
    designer: 'Cozy Italian wool, meet the cold shoulder! This sweater is made with a rib-knit collar, so it hugs your shoulders and stays in place.',
    fit: 'Slim — streamlined to fit close to the body',
    sizing: 'Fits true to size. Take your normal size',
    model: 'Model is 180/5\'9 wearing a size S',
    materials: {
        origin: 'Yarn from Italy',
        content: '38% polyamide, 26% acrylic, 25% alpaca, 10% wool, 1% elastane',
        care: 'Hand wash',
        imported: true
    }
  },
  images: [
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_a.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_b.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_c.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_d.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_e.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_6046_on_a.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_6046_on_b.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_6046_on_c.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_6046_on_d.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_10359_off_a.jpg'
  ],
  modelWearing: [
    {
      name: 'Wilfred Free Spurlock Skirt',
      image: 'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a07_60791_1274_on_a.jpg',
      url: 'http://www.aritzia.com/en/product/spurlock-skirt/60791.html?dwvar_60791_color=1274'
    },
    {
      name: 'Framer Neuveau Le Mix',
      image: 'http://s7d9.scene7.com/is/image/Aritzia/hi-res/f16_10_a06_62312_1502_on_a.jpg',
      url: 'http://www.aritzia.com/en/product/neuveau-le-mix/62312.html?dwvar_62312_color=1502'
    }
  ]
}

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentImage: product.images[0]
    }
  }
  
  handleThumbnailImageChange(e) {
    this.setState({
      currentImage: e.target.src
    });
  }
  
  handleSwatchImageChange(colourIndex) {
    this.setState({
      currentImage: product.colours[colourIndex].image
    });
  }
  
  getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i][prop] === value) {
        return i
      }
    }
    return -1;
  }
  
  render() {
    return(
      <div className="product-container">
        <div className="product-inner-wrapper product-top">
          <ProductGallery
            currentImage={this.state.currentImage} 
            otherColours={product.colours} 
            images={product.images}
            handleImageChange={this.handleThumbnailImageChange.bind(this)} />
          <ProductDescription 
            getIndex={this.getIndex.bind(this)}
            handleImageChange={this.handleSwatchImageChange.bind(this)}
            product={product} />
        </div>
        <div className="product-bottom">
          <ProductInfo product={product} />
        </div>
      </div>
    );
  }
}

module.exports = ProductContainer;