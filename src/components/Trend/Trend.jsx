import React, { useState } from 'react';
import style from "./Trend.module.css";
import washingmachine from "../../assets/Trend/washingmachine.png"

const listTrend = [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 }
]
const Trend = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div className={style.container}>

            <div className={style.desktop}>

                <h1 style={{ color: "white" }}>TENDENCIA</h1>



                <div className={style.listTrend}>

                    <button className={style.buttonleft}>{"<"}</button>

                    {listTrend.map((e, i) => (
                        <div key={i} className={style.item}>

                            <img src={washingmachine} alt="" />
                            <h3>Samsung</h3>
                            <h4> Smart Tv 75" UHD</h4>
                            <p>$ 1.100.99</p>

                            <button>comprar</button>


                        </div>
                    ))}

                    <button className={style.buttonright}>{">"}</button>

                </div>

            </div>




            <div className={style.mobile}>
                <h1 style={{ color: "white" }}>TENDENCIA</h1>



                <div className={style.listTrend}>


                    {listTrend.map((e, i) => (
                        <div key={i} className={style.item}>

                            <img src={washingmachine} alt="" />

                            <h3>Samsung</h3>
                            <h4> Smart Tv 75" UHD</h4>
                            <p>$ 1.100.99</p>

                            <button>comprar</button>


                        </div>
                    ))}






                </div>

                <div className={style.dots}>

                    {listTrend.map((e, i) => {
                        return (
                            <div
                                className={`${i === currentIndex ? style.dotActive : style.dot}`}
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

export default Trend;