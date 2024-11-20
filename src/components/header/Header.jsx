import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import cart from '../../img/Frame.svg';
import user from '../../img/Frame(1).svg';
import arrow from '../../img/Frame(2).svg';
import searchIcon from '../../img/Vector.svg';

export const Header = () => {
    const [showPageLinks, setShowPageLinks] = useState(false);

    const shopLinksRef = useRef(null);
    
    const togglePageLinks = () => {
        setShowPageLinks(!showPageLinks);
    };
    return (
        <header className='header'>
            <div>
            <Link to={'/'}><h2>SHOP.CO</h2></Link>
            </div>
            <div className='links'>
            <div className='shopLinks' onClick={togglePageLinks} ref={shopLinksRef}><p>Shop</p><img src={arrow} alt="" /></div>
            {
                showPageLinks ? (
                <div className={`pageLinks`}>
                    <Link onClick={togglePageLinks} to={'/'}><p>Home page</p></Link>
                    <Link onClick={togglePageLinks} to={'/category'}><p>Category page</p></Link>
                    <Link onClick={togglePageLinks} to={'/cart'}><p>Cart page</p></Link>
                </div>
                ) : ""
            }
            <p><a href="#on-sale">On Sale</a></p>
            <p><a href="#on-newArrivals">New Arrivals</a></p>
            <p><a href="#on-brands">Brands</a></p>
            </div>
            <div className='inputSearch'>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search for products...'/>
            </div>
            <div className='icons'>
            <img src={cart} alt="" />
            <img src={user} alt="" />
            </div>
            
        </header>
    );
}

