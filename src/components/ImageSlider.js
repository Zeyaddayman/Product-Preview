import './ImageSlider.css';

import { imgs } from './Images';
import { thumbnailImgs } from './Images';

import previous from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';
import close from '../images/icon-close.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../rtk/reducers/img-slider-reducer';

function ImageSlider(props) {

    const dispatch = useDispatch();

    const [currentImg, setCurrentImg] = useState(props.mainImg);

    const deleteAllAcitves = () => {
        let allImgs = document.querySelectorAll('.img-slider .selectors img');
        allImgs.forEach((img) => img.classList.remove('active'));
    }

    const setMainImg = (index) => {
        deleteAllAcitves();
        setCurrentImg(imgs[index]);
    }

    return (
        <>
        <div onClick={() => {
            dispatch(changeStatus());
        }} className='img-slider-overlay'></div>
        <div className='img-slider'>
            <div className='carousel'>
                <span className='close' onClick={() => {
                    dispatch(changeStatus());
                }}><img src={close} alt='X' /></span>
                <span className='previous' onClick={() => {
                    imgs.indexOf(currentImg) !== 0 && setMainImg(imgs.indexOf(currentImg) - 1);
                }}><img src={previous} alt='previous' /></span>
                <span className='next' onClick={() => {
                    imgs.indexOf(currentImg) !== 3 && setMainImg(imgs.indexOf(currentImg) + 1);
                }}><img src={next} alt='next' /></span>
                <div className='main-img'>
                    <img src={currentImg} alt='main-img' />
                </div>
            </div>
            <div className='selectors'>
                {thumbnailImgs.map((img, i) => (
                    <img key={i} id={i} className={i === imgs.indexOf(currentImg) ? 'active' : null} onClick={(e) => {
                        setMainImg(e.target.id);
                        e.target.classList.add('active');
                    }} src={img} alt='' />
                ))}
            </div>
        </div>
        </>
    )
}

export default ImageSlider;