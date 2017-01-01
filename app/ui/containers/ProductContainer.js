var React = require('react');
var Component = React.Component;

require('./ProductContainer.css');

var ProductGallery = require('../components/products/ProductGallery.js');
var ProductDescription = require('../components/products/ProductDescription.js');
var ProductInfo = require('../components/products/ProductInfo.js');

const product = {
  collection: 'Wilfred Free',
  name: 'Faretta Sweater',
  id: 62947,
  colours: [
    {
      name: 'Black',
      slug: 'black',
      swatch: 'http://s7d9.scene7.com/is/image/Aritzia/swatch/f16_07_a03_62947_1274_sw.jpg',
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
      name: 'Heather Herring',
      slug: 'heather-herring',
      swatch: 'http://s7d9.scene7.com/is/image/Aritzia/swatch/f16_07_a03_62947_10359_sw.jpg',
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
    fit: 'slim',
    sizing: true,
    model: 'Model is 180/5\'9 wearing a size S',
    materials: {
        origin: 'Yarn from Italy',
        content: [
          '38% polyamide',
          '26% acrylic',
          '25% alpaca',
          '10% wool',
          '1% elastane'
        ],
        care: 'Hand wash',
        imported: true
    }
  },
  images: [
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_a.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_b.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_c.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_d.jpg',
    'http://s7d9.scene7.com/is/image/Aritzia/large/f16_07_a03_62947_1274_on_e.jpg'
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
  }
  
  render() {
    return(
      <div className="product-container">
        <div className="product-inner-wrapper product-top">
          <ProductGallery images={product.images} />
          <ProductDescription product={product} />
        </div>
        <div className="product-bottom">
          <ProductInfo />
        </div>
      </div>
    );
  }
}

module.exports = ProductContainer;