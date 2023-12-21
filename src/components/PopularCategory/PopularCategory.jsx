import React, { useState } from 'react';
import style from "./PopularCategory.module.css";
import { listImageCategoryPopular } from '../../utils/listImageCategoryPopular/ScriptCategoryPopular';



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



                    {/* 1 */}
                    <div className={style.item1}>
                        <h2>ZAPATILLAS</h2>

                        <img src={listImageCategoryPopular[0].url} alt="" />
                    </div>
                    {/* 1 */}


                    {/* 2 */}

                    <div className={style.item2}>

                        <div className={style.up}>
                            <h2>FÚTBOL</h2>
                            <img src={listImageCategoryPopular[3].url} alt="" />

                        </div>
                        <div className={style.down}>

                            <h2>CALZAS</h2>
                            <img src={listImageCategoryPopular[2].url} alt="" />

                        </div>
                    </div>
                    {/* 2 */}


                    {/* 3 */}

                    <div className={style.item3}>
                        <h2>PELOTA</h2>

                        <img src={listImageCategoryPopular[1].url} alt="" />


                    </div>
                    {/* 3 */}


                </div>

            </div>



            <div className={style.mobile}>
                <h1 className={style.title}>VISITÁ LAS CATEGORÍAS MÁS POPULARES</h1>



                <div className={style.containerSlider}>



                    <h2>{`${listImageCategoryPopular[currentIndex].title}`} </h2>

                    <img src={`${listImageCategoryPopular[currentIndex].url}`} alt="" />


                </div>


                <div className={style.dots}>

                    {listImageCategoryPopular.map((e, i) => {
                        return (
                            <div
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