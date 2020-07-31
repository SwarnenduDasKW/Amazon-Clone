import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ basket }, dispatch] = useStateValue();

    // for debugging
    console.log(basket);

    return <nav className="header">

        {/* 
            Logo on the left 
            Link vs Href : Href causes the page to refresh but Link doesn't
        */}
        <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        {/* Search bar */}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>
        {/* 3 links */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Shawn</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            {/* 3rd link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            {/* 4th link */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon className="header__shoppingBasket"/>
                    {/* No of items in the cart */}
                    <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
        {/* Basket icon */}

    </nav>;
}

export default Header
