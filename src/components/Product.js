import './Product.css';

import { imgs } from './Images';
import { thumbnailImgs } from './Images';

import previous from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cartIcon from '../images/icon-cart.svg';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../rtk/reducers/img-slider-reducer';
import ImageSlider from './ImageSlider';
import { setCounter } from '../rtk/reducers/counter-reducer';
import { addItem } from '../rtk/reducers/cart-reducer';

function Product() {

    let productTitle = 'Fall Limited Edition Sneakers';
    let productPrice = 125;

    const imgSlider = useSelector((state) => state.imgSlider);

    let counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const [currentImg, setCurrentImg] = useState(imgs[0]);

    const deleteAllAcitves = () => {
        let allImgs = document.querySelectorAll('.product-info .container .left-side .selectors img');
        allImgs.forEach((img) => img.classList.remove('active'));
    }

    const setMainImg = (index) => {
        deleteAllAcitves();
        setCurrentImg(imgs[index]);
    }

    return (
        <div className="product-info">
            {imgSlider && <ImageSlider mainImg={currentImg} />}
            <div className="container">
                <div className='left-side'>
                    <div className='controls'>
                        <span className='previous' onClick={() => {
                            imgs.indexOf(currentImg) !== 0 && setMainImg(imgs.indexOf(currentImg) - 1);
                        }}><img src={previous} alt='previous' /></span>
                        <span className='next' onClick={() => {
                            imgs.indexOf(currentImg) !== 3 && setMainImg(imgs.indexOf(currentImg) + 1);
                        }}><img src={next} alt='next' /></span>
                    </div>
                    <div className="main-img">
                        <img onClick={() => {dispatch(changeStatus())}} src={currentImg} alt="main img" />
                    </div>
                    <div className='selectors'>
                        {thumbnailImgs.map((img, i) => (
                            <img key={i} id={i} className={i === 0 ? 'active' : null} onClick={(e) => {
                                setMainImg(e.target.id)
                                e.target.classList.add('active');
                            }} src={img} alt='' />
                        ))}
                    </div>
                </div>
                <div className='right-side'>
                    <div className='content'>
                        <h4>SNEAKER COMPANY</h4>
                        <h1>{productTitle}</h1>
                        <p className='info'>
                            These low-profile sneakers are your perfect casual wear
                            companionfeaturing a durable rubber outer sole. they'll
                            withstand everything the weather can offer.
                        </p>
                        <h3 className='price'>
                            ${productPrice} <span className='offer'>50%</span>
                        </h3>
                        <p className='old-price'>$250.00</p>
                        <div className='controls'>
                            <div className='counter'>
                                <span onClick={() => {
                                    if (counter !== 1) dispatch(setCounter(-1));
                                }}><img src={minus} alt='minus' /></span>
                                <span className='count'>{counter}</span>
                                <span onClick={() =>{
                                    dispatch(setCounter(+1));
                                }}><img src={plus} alt='plus' /></span>
                            </div>
                            <button className='cart-btn' onClick={() => {
                                dispatch(addItem({
                                    img: currentImg,
                                    title: productTitle,
                                    price: productPrice,
                                    count: counter,
                                    total: productPrice * counter,
                                    id: 0
                                }))
                            }}>
                                <span><img src={cartIcon} alt='cart' /></span>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;