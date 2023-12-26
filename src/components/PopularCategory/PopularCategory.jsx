import React, { useState } from 'react';
import style from "./PopularCategory.module.css";
import { listImageCategoryPopular } from '../../utils/listImageCategoryPopular/ScriptCategoryPopular';
import { listImageCategoryPopularmobile } from '../../utils/listImageCategoryPopular/ScriptCategoryPopular';



const PopularCategory = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div className={style.container}>

            <div className={style.desktop}>


                <h1 className={style.title}>VISITÁ LAS CATEGORÍAS MÁS POPULARES</h1>

                <div className={style.containerItem}>



                    <div className={style.item1}>
                        <h2>ZAPATILLAS</h2>

                        <img src={listImageCategoryPopular[0].url} alt="" />
                    </div>

                    <div className={style.item2}>

                        <div className={style.up}>
                            <h2>FÚTBOL</h2>
                            <img src={listImageCategoryPopular[1].url} alt="" />

                        </div>
                        <div className={style.down}>

                            <h2>CALZAS</h2>
                            <img src={listImageCategoryPopular[2].url} alt="" />

                        </div>
                    </div>
                    <div className={style.item3}>
                        <h2>PELOTAS</h2>

                        <img src={listImageCategoryPopular[3].url} alt="" />

                    </div>


                </div>

            </div>



            <div className={style.mobile}>
                <h1 className={style.title}>VISITÁ LAS CATEGORÍAS MÁS POPULARES</h1>



                <div className={style.containerSlider}>



                    <h2>{`${listImageCategoryPopularmobile[currentIndex].title}`} </h2>

                    <img src={`${listImageCategoryPopularmobile[currentIndex].url}`} alt="" />


                </div>


                <div className={style.dots}>

                    {listImageCategoryPopularmobile.map((e, i) => {
                        return (
                            <div
                                key={i}

                                className={`${i === currentIndex ? style.dotactive : style.dot}`}
                                onClick={() => goToSlide(i)}
                            >
                                {" "}
                            </div>
                        );
                    })}
                </div>




            </div>

        </div>
    );


};

export default PopularCategory;