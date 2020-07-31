import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout"> 
            <div className="checkout__left">
                <img 
                    className="checkout__ad"        
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2019/GCLP/BGC/Sept/GC_BGC_GCLP_DesktopSlideshow_1024x90_3_en.jpg"
                    alt=""
                />
                { basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is emplty</h2>
                        <p>You have no items in your basket. To buy one or more click "Add to basket" next to the item.</p>
                    </div>
                    ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List out all the products added to the basket */}
                        {
                            basket.map(item => {
                                console.log(item);
                                return  (
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                )
                            })
                        }
                    </div>                 
                )}
            </div>
            { basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
