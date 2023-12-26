import React, { useRef, useState } from 'react';
import style from "./Trend.module.css";
import washingmachine from "../../assets/Trend/washingmachine.png"

const listTrend = [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
]

const listmobile = [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },

]


const Trend = () => {

    const carruselRef = useRef();
    const carruselRefmobile = useRef();
    const cardRef = useRef();
    const cardRefmobile = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);


    const [isDragging, setIsDragging] = useState(false);
    const goToSlide = (slideIndex) => {
        console.log(cardRefmobile)
        setCurrentIndex(slideIndex);
        const cardWidth = cardRefmobile.current.offsetWidth;
        const newPosition = slideIndex * cardWidth;
        carruselRefmobile.current.scrollLeft = newPosition;
    };
    const dragStart = (e) => {
        setIsDragging(true);

        carruselRef.current.classList.add("dragging");
        setStartX(e.pageX);
        setStartScrollLeft(carruselRef.current.scrollLeft)

    }
    const dragging = (e) => {
        if (!isDragging) return;

        carruselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        setIsDragging(false);

        carruselRef.current.classList.remove("dragging");

    }
    const moveCarrousel = (direction) => {
        const cardWidth = cardRef.current.offsetWidth;
        const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
        carruselRef.current.scrollLeft += scrollAmount;
    };

    return (
        <div className={style.container}>

            <div className={style.desktop}>

                <h1 style={{ color: "white" }}>TENDENCIAS</h1>



                <div className={style.listTrend}>

                    <button onClick={(e) => { moveCarrousel("left") }} className={style.buttonleft}>{"<"}</button>
                    <div ref={carruselRef} onMouseUp={(e) => { dragStop(e) }} onMouseDown={(e) => { dragStart(e) }} onMouseMove={(e) => { dragging(e) }} className={style.carrusel}>

                        {listTrend.map((e, i) => (
                            <div ref={cardRef} draggable={false} key={i} className={style.item}>

                                <img src={washingmachine} alt="" />
                                <h3>Samsung</h3>
                                <h4> Smart Tv 75" UHD</h4>
                                <p>$ 1.100.99</p>

                                <button>comprar</button>


                            </div>
                        ))}

                    </div>

                    <button onClick={() => { moveCarrousel("rigth") }} className={style.buttonright}>{">"}</button>

                </div>

            </div>




            <div className={style.mobile}>
                <h1 style={{ color: "white" }}>TENDENCIAS</h1>



                <div className={style.listTrend}>

                    <div ref={carruselRefmobile} onMouseUp={(e) => { dragStop(e) }} onMouseDown={(e) => { dragStart(e) }} onMouseMove={(e) => { dragging(e) }} className={style.carrusel}>

                        {listmobile.map((e, i) => (
                            <div ref={cardRefmobile} key={i} className={style.item}>

                                <img src={washingmachine} alt="" />

                                <h3>Samsung</h3>
                                <h4> Smart Tv 75" UHD</h4>
                                <p>$ 1.100.99</p>

                                <button>comprar</button>


                            </div>
                        ))}



                    </div>



                </div>

                <div className={style.dots}>

                    {listmobile.map((e, i) => {
                        return (
                            <div
                                key={i}

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