import React from 'react';
import styleFooter from "./Footer.module.css";
import PierceLoge from '../../assets/Footer/PierceLoge.svg';
import Vtex from '../../assets/Footer/Vtex.png';
import DatafiscalWeb from '../../assets/Footer/DatafiscalWeb.png';
import gpsLoge from '../../assets/Footer/gpsLoge.svg';

const Footer = () => {
    return (
        <footer className={styleFooter.footer}>


            <div className={styleFooter.dates}>



                <div className={styleFooter.informationLeft}>

                    <ul>
                        <li>CONDICIONES</li>
                        <li>TRABAJA CON NOSOTROS</li>
                        <li>MEDIOS DE PAGO</li>
                        <li>PREGUNTAS FRECUENTES</li>

                        <button>BOTÓN DE ARREPENTIMIENTO</button>
                    </ul>
                </div>
                <div className={styleFooter.loge}>
                    <h1>MI TIENDA</h1>

                </div>
                <div className={styleFooter.informationRigth}>


                    <div className={styleFooter.sucursal}><img src={gpsLoge} alt="" />
                        <h2 style={{ padding: "25px" }} >SUCURSALES</h2>
                    </div>

                    <ul>
                        <li>Whatsapp 2215137270</li>
                        <li>ecommerce@mateu.com.ar</li>
                        <li>La Plata 1900, Buenos Aires, Argentina </li>
                    </ul>



                </div>

            </div>


            <div className={styleFooter.information}>



                <div className={styleFooter.poweredByDiv}>
                    <h3 style={{ color: "white" }}>Powered by pierce commerce</h3>
                    <img src={PierceLoge} alt="" />
                    <img className={styleFooter.vtex} src={Vtex} alt="" />

                </div>

                <div className={styleFooter.mateuSportsDiv}>

                    <h3 style={{ color: "white" }}>© 2023 MateuSports</h3>

                    <div>

                        <img src={DatafiscalWeb} alt="" />
                        <img className={styleFooter.vtexmobile} src={Vtex} alt="" />

                    </div>


                </div>
            </div>


        </footer>
    );
};

export default Footer;