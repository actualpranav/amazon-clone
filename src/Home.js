import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_Bills._CB667391360_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345678"
            title="iQOO Z3 5G (Cyber Blue, 8GB RAM, 128GB Storage) | India's First SD
          768G 5G Processor | 55W FlashCharge |
          Extra Rs.2000 Off on Exchange"
            price={20999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/615CXlFtDDS._SL1200_.jpg"
            rating={5}
          />
          <Product
            id="22345678"
            title="Divine Casa 100% Cotton Geometric Print Mix N Match Bedsheet for Double Bed (Multicolour)"
            price={629.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81iDqTDVr%2BL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="32345678"
            title="Nike Women's WMNS Zoom Pegasus Turbo 2 Running Shoes"
            price={7996.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71MdVVx%2BRwL._UL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="42345678"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price={3499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            rating={5}
          />
          <Product
            id="52345678"
            title="OnePlus Buds (Gray)"
            price={4990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61g7EWzQ2DL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="62345678"
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={69999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
