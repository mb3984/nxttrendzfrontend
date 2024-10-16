import React from "react";
import "./index.css";

const products = [
  {
    title: "Embroidered Net Gown",
    brand: "Manyavar",
    price: 62990,
    id: 16,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
  },
  {
    title: "Front Load Machine",
    brand: "Samsung",
    price: 22490,
    id: 24,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
  },
  {
    title: "Collider Black Dial Men's Watch",
    brand: "Fossil",
    price: 14995,
    id: 33,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png",
  },
  {
    title: "True Wireless Earbuds",
    brand: "LG",
    price: 13499,
    id: 18,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
  },
  {
    title: "Maritime Men's Watch",
    brand: "Titan",
    price: 11999,
    id: 35,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-tatar-watch.png",
  },
  {
    title: "Neutra Analog Men's Watch",
    brand: "Fossil",
    price: 10995,
    id: 34,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png",
  },
  {
    title: "Monsters Charm Toy",
    brand: "Trendytap",
    price: 8600,
    id: 48,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
  },
  {
    title: "Privateer Quartz Watch",
    brand: "Fossil",
    price: 8122,
    id: 31,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-black-watch.png",
  },
  {
    title: "Chronograph black Watch",
    brand: "Fossil",
    price: 6395,
    id: 32,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-watch.png",
  },
  {
    title: "Podcast Microphone",
    brand: "MAONO",
    price: 5555,
    id: 22,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png",
  },
  {
    title: "Virgin Avocado Oil",
    brand: "ProV",
    price: 4144,
    id: 42,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png",
  },
  {
    title: "Wrap Dress",
    brand: "Vero Moda",
    price: 3039,
    id: 12,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png",
  },
  {
    title: "Warm Up Jacket",
    brand: "Monte Carlo",
    price: 2796,
    id: 11,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png",
  },
  {
    title: "Slim Fit Blazer",
    brand: "LEVIS",
    price: 2599,
    id: 8,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png",
  },
  {
    title: "Men's Waistcoat",
    brand: "LEVIS",
    price: 2500,
    id: 4,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
  },
  {
    title: "Sheer Anarkali",
    brand: "Saadgi",
    price: 2172,
    id: 14,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-white-punjabi.png",
  },
  {
    title: "SilverBullet Mixer Grinder",
    brand: "COOKWELL",
    price: 1899,
    id: 20,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png",
  },
  {
    title: "Zari Design Kurta",
    brand: "Libas",
    price: 1869,
    id: 7,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png",
  },
  {
    title: "Analog Men's Watch",
    brand: "Fastrack",
    price: 1850,
    id: 25,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
  },
  {
    title: "Embellished Maxi Dress",
    brand: "STREET 9",
    price: 1799,
    id: 15,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-blue-fork.png",
  },
  {
    title: "PS5 Controller Charger",
    brand: "New World",
    price: 1749,
    id: 21,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ps5-controller.png",
  },
  {
    title: "Mixer Grinder",
    brand: "Lifelong",
    price: 1699,
    id: 19,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
  },
  {
    title: "Dynamic Microphone",
    brand: "JTS Store",
    price: 1699,
    id: 23,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-solo-mike.png",
  },
  {
    title: "Tea Kettle Pot",
    brand: "Indian Art Villa",
    price: 1685,
    id: 26,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
  },
  {
    title: "Non-Toxic Robot Toys",
    brand: "FunBlast",
    price: 1545,
    id: 52,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-short-green-robot.png",
  },
  {
    title: "Slim Fit Jeans",
    brand: "LEVIS",
    price: 1469,
    id: 5,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png",
  },
  {
    title: "Panda Baby Product",
    brand: "Panda",
    price: 1399,
    id: 47,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
  },
  {
    title: "Handheld Full Body Massager",
    brand: "AGARO REGAL",
    price: 1299,
    id: 17,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
  },
  {
    title: "Turmeric Powder",
    brand: "Patanjali",
    price: 1234,
    id: 45,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-turmeric.png",
  },
  {
    title: "Nova SuperGroom Multi-kit",
    brand: "Nova",
    price: 1199,
    id: 30,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nover-v2-trimmer.png",
  },
  {
    title: "Animal Printed Shirt",
    brand: "Mufti",
    price: 1017,
    id: 9,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-short-sleeves-shirt.png",
  },
  {
    title: "Knit Cream Sweater",
    brand: "MansiCollections",
    price: 996,
    id: 13,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-stylish-sweater.png",
  },
  {
    title: "Miss Chase Bodycon Dress",
    brand: "LEVIS",
    price: 974,
    id: 6,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-modren-net.png",
  },
  {
    title: "Chilli Extract Sauce",
    brand: "Everin",
    price: 788,
    id: 37,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
  },
  {
    title: "Batman Batmobile",
    brand: "Funskool",
    price: 745,
    id: 46,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
  },
  {
    title: "Knitted Rabbit",
    brand: "Ira",
    price: 620,
    id: 49,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png",
  },
  {
    title: "Kids Toy Train",
    brand: "FIONA",
    price: 599,
    id: 51,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-red-train.png",
  },
  {
    title: "Honey Teddy Bear",
    brand: "Honey",
    price: 599,
    id: 53,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-simple-teddy.png",
  },
  {
    title: "Cotton Hoodie",
    brand: "Scott International",
    price: 498,
    id: 3,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
  },
  {
    title: "Nexa Yellow Car",
    brand: "Quinergys",
    price: 490,
    id: 54,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-yellow-car.png",
  },
  {
    title: "Polyester Saree",
    brand: "Ahalyaa",
    price: 419,
    id: 10,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-side-sareee.png",
  },
  {
    title: "Aluminium 4 Cup Tea Kettle",
    brand: "Kitchen Expert",
    price: 399,
    id: 27,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
  },
  {
    title: "Beard Trimmer",
    brand: "Nova",
    price: 398,
    id: 29,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nova-trimmer.png",
  },
  {
    title: "Plain Round Neck T-shirt",
    brand: "Huetrap",
    price: 395,
    id: 2,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
  },
  {
    title: "Tripod Stand",
    brand: "Sketchfab",
    price: 390,
    id: 28,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png",
  },
  {
    title: "Bot Robot Toy",
    brand: "WireScorts",
    price: 355,
    id: 50,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-robot.png",
  },
  {
    title: "Wide Bowknot Hat",
    brand: "MAJIK",
    price: 288,
    id: 1,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
  },
  {
    title: "Crystal Sugar",
    brand: "NatureVit",
    price: 278,
    id: 44,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-sugar-cubes.png",
  },
  {
    title: "Basmati Rice",
    brand: "Fortune",
    price: 244,
    id: 43,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-rice.png",
  },
  {
    title: "Flour Unbleached",
    brand: "TWF Store",
    price: 200,
    id: 38,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
  },
  {
    title: "Maroon Kumkum ",
    brand: "Amazon",
    price: 200,
    id: 40,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--kumkum.png",
  },
  {
    title: "Eggs",
    brand: "Naturoz",
    price: 60,
    id: 36,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
  },
  {
    title: "Fresh Lemon, 100g",
    brand: "Amazon",
    price: 50,
    id: 41,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-lemons.png",
  },
  {
    title: "Fresh Produce Green Chilli",
    brand: "Amazon",
    price: 30,
    id: 39,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
  },
  {
    title: "Fresh Produce Green Chilli",
    brand: "Amazon",
    price: 30,
    id: 39,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
  },
  {
    title: "Apple iPhone 13",
    brand: "Apple",
    price: 69999,
    id: 40,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-iphone.png",
  },
  {
    title: "Noise Cancelling Headphones",
    brand: "Sony",
    price: 14999,
    id: 41,
    image_url:
      "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-headphones.png",
  },
];

const Products = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image_url}
            alt={product.title}
            className="product-image"
          />
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-brand">{product.brand || "Unknown Brand"}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
