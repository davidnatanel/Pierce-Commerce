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
                        <li>
                            <p>
                                CONDICIONES
                            </p>
                        </li>
                        <li>
                            <p>
                                TRABAJA CON NOSOTROS
                            </p>
                        </li>
                        <li>
                            <p>
                                MEDIOS DE PAGO

                            </p>
                        </li>
                        <li>
                            <p>
                                PREGUNTAS FRECUENTES
                            </p>
                        </li>

                    </ul>
                    <button>BOTÓN DE ARREPENTIMIENTO</button>

                </div>


                <div className={styleFooter.loge}>
                    <h1>MI TIENDA</h1>

                </div>
                <div className={styleFooter.informationRigth}>


                    <div className={styleFooter.sucursal}><img src={gpsLoge} alt="" />
                        <h2  >SUCURSALES</h2>
                    </div>

                    <ul>
                        <li>
                            <p>
                                Whatsapp 2215137270

                            </p>
                        </li>
                        <li>
                            <p>
                                ecommerce@mateu.com.ar

                            </p>
                        </li>
                        <li>
                            <p>

                                La Plata 1900, Buenos Aires, Argentina

                            </p>
                        </li>
                    </ul>



                </div>

            </div>


            <div className={styleFooter.information}>



                <div className={styleFooter.poweredByDiv}>
                    <h3 style={{ color: "white", paddingRight: "12.51px" }}>Powered by pierce commerce</h3>
                    <img src={PierceLoge} style={{ paddingRight: "25.52px" }} alt="" />
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