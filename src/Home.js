import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className = "home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
            alt=""/>

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
            <Product 
                id="1111"
                title="TP-Link AC1750 Smart WiFi Router"
                price={64.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
            />
            <Product 
                id="2222"
                title="AmazonBasics 36 Count AAA Batteries"
                price={10.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71nDX36Y9UL._AC_SL1026_.jpg"
            />
              <Product 
                id="3333"
                title="Sceptre E248W-19203R 24 Ultra Thin"
                price={101.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61VHh%2BjA7DL._AC_SL1080_.jpg"
            />
              <Product 
                id="4444"
                title="Samsung EVO Select 128GB microSDXC"
                price={19.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81axmUuRHrL._AC_SL1500_.jpg"
            />
              <Product 
                id="5555"
                title="Apple AirPods with Wired Charging Case"
                price={169.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product 
                id="6666"
                title="Apple Magic Keyboard"
                price={119.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41en9GPO2tL._AC_.jpg"
            />
            <Product 
                id="7777"
                title="Sony MDRZX110/BLK ZX Series Stereo Headphones (Black)"
                price={89.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61JxBr0UreL._AC_SL1200_.jpg"
            />
             <Product 
                id="8888"
                title="Nintendo Switch 32GB Console Video Games "
                price={249.99}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/512C3esxzRL._AC_SL1000_.jpg"
            />
            </div>
            {/* Product */}
        </div>
    );
}

export default Home
