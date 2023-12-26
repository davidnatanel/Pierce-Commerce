import React, { useState } from 'react';
import style from "./InformationProduct.module.css";

import bag from '../../assets/InformationProduct/bag.svg';
import box from '../../assets/InformationProduct/box.svg';
import truck from '../../assets/InformationProduct/truck.svg';
import { listInformationProduct } from '../../utils/InformationProduct/ScriptInformationProduct';


const InformationProduct = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div className={style.container}>

            <div className={style.desktop}>
                <div className={style.item}>

                    <img src={bag} alt="" />
                    <h2>ELEGÍ LOS PRODUCTOS QUE VAS A COMPRAR</h2>
                    <p>Si querés más de uno, sumalos a tu carrito.</p>
                </div>


                <div className={style.item}>

                    <img src={box} alt="" />

                    <h2>PAGÁ CON EL MEDIO DE PAGO QUE QUIERAS</h2>
                    <p>Comprá con seguridad: usamos la tecnologá de Mercado Pago.</p>
                </div>

                <div className={style.item}>


                    <img src={truck} alt="" />
                    <h2>RECIBÍ EL PRODUCTO QUE ESPERÁS</h2>
                    <p>Elegí la forma de entrega que prefieras ¡y listo! Aseguramostu entrega con Mercado Envíos.</p>
                </div>

            </div>

            <div className={style.mobile}>
                <div className={style.box}>
                    <div

                        className={style.containerbox}
                    >   <img src={`${listInformationProduct[currentIndex].url}`} alt="" />

                        <h2>{`${listInformationProduct[currentIndex].title}`}</h2>

                        <p>{`${listInformationProduct[currentIndex].text}`}</p>


                    </div>

                </div>



                <div className={style.dots}>

                    {listInformationProduct.map((e, i) => {
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
        </div >
    );
};

export default InformationProduct;