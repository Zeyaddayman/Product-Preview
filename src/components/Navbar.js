import './Navbar.css';

import logo from '../images/logo.svg';
import cartIcon from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png'
import menu from '../images/icon-menu.svg';
import deleteIcon from '../images/icon-delete.svg';
import links from './Links';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../rtk/reducers/side-bar-reducer';
import { useState } from 'react';
import { removeItem } from '../rtk/reducers/cart-reducer';

function Navbar() {

    const [showCart, setShowCart] = useState(false);

    let cart = useSelector((state) => state.cart);

    const sidebar = useSelector((state) => state.sidebar);

    const dispatch = useDispatch();

    return (
        <>
        {sidebar && <Sidebar />}
        <div className="header">
            <div className="container">
                <div className='left-side'>
                    <span className='menu-icon' onClick={() => dispatch(changeStatus())}><img src={menu} alt='' /></span>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className='links desktop'>
                        {links.map((link) => <li key={link} >{link}</li>)}
                    </ul>
                </div>
                <div className='right-side'>
                    <div className={`cart-icon ${cart.length > 0 && 'not-empty'}`} 
                    data-count={cart.length > 0 && cart[0].count} onClick={() => {
                        showCart ? setShowCart(false) : setShowCart(true);
                    }}>
                        <img src={cartIcon} alt='cart' />
                    </div>
                    <div className={showCart ? 'cart' : 'hidden-cart'}>
                        <h4>Cart</h4>
                        {cart.length > 0 ? 
                            <div className='content not-empty'>
                                {cart.map((item) => (
                                    <div key={item.title} className={`item ${item.title}`} >
                                        <img className='product-img' src={item.img} alt='' />
                                        <div className='info'>
                                            <h5 className='product-name'>{item.title}</h5>
                                            <span className='product-price'>${item.price} x{item.count}</span>
                                            <span className='total'>${item.total}</span>
                                        </div>
                                        <img className='delete' onClick={() => {
                                            dispatch(removeItem(item.id))
                                        }} src={deleteIcon} alt='delete' />
                                    </div>
                                ))}
                                <button className='checkout'>
                                    Checkout
                                </button>
                            </div>    
                            : <div className='content empty'>Your cart is empty</div>}
                    </div>
                    <div className='avatar'>
                        <img src={avatar} alt='avatar' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;