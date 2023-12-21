import React, { useEffect, useState } from 'react';
import style from "./Slider.module.css";
import slider from '../../assets/Slider.png';
import { listSlider } from '../../utils/ImageSlider/ScriptSlider';


const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div className={style.container}>
            <img className={style.img} src={listSlider[currentIndex].url} alt="" />


            <div className={style.dots}>

                {listSlider.map((e, i) => (
                    <div


                        className={`${i === currentIndex ? style.dotactive : style.dot}`}
                        onClick={() => goToSlide(i)}


                    ></div>
                ))}

            </div>


        </div >
    );
};

export default Slider;