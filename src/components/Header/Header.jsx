import React, { useState } from 'react';
import style from "./Header.module.css";
import Search from '../../assets/Header/search.svg';
import User from '../../assets/Header/User.svg';
import Cart from '../../assets/Header/Cart.svg';
import Group from '../../assets/Header/Group.svg';
import menu from '../../assets/Header/Atom/icon/menu.svg';
import cross from '../../assets/Header/cross.svg';

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)



    const buttonMenu = (type) => {

        setMenuActive(!menuActive)


        if (type == "cross") {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = 'auto';

        }

    }
    return (
        <header style={{ height: menuActive == true ? "81px" : null, border: menuActive == true ? "2px solid #000000" : null }} className={style.header}>


            <div style={{ justifyContent: menuActive == true ? "start" : null }} className={style.containerHeader}>


                <img style={{ display: menuActive == true ? "none" : null }} onClick={() => { buttonMenu("cross") }} className={style.menumobile} src={menu} alt="" />

                <div className={style.loge}>

                    <h1 >MI TIENDA</h1>
                </div>

                <img style={{ display: menuActive == false ? "none" : "block" }} onClick={() => { buttonMenu() }} className={style.menucross} src={cross} alt="" />




                <div className={style.containerSearch}>

                    <div className={style.SearchBox}>

                        <input type="text" />
                        <button className={style.buttonSearch} > <img src={Search} alt="" /></button>
                    </div>



                    <div style={{ display: menuActive == true ? "none" : "flex" }} className={style.buttonsUserCart}>

                        <button className={style.MyCount}><img style={{ fill: "#5E5E5E", width: "22px", height: "22px" }} src={User} alt="" /> <p>Mi cuenta</p></button>
                        <button ><img style={{ width: "22px", height: "22px" }} src={Cart} alt="" /></button>



                    </div>


                </div>



            </div>


            <div style={{ display: menuActive == true ? "none" : null }} className={style.SearchBoxMobile}>

                <input type="text" />
                <button className={style.buttonSearch} > <img src={Search} alt="" /></button>
            </div>


            <li className={style.buttonlist}>
                <ul style={{ color: "#5E5E5E" }}>Muebles</ul>
                <ul style={{ color: "#5E5E5E" }}>Colchones</ul>
                <ul style={{ color: "#5E5E5E" }}>Herramientas</ul>
                <ul className={style.sale} >Ofertas <img style={{ color: "#DC1E0F", width: "22px", height: "22px" }} src={Group} alt="" /> </ul>
            </li>


            <li style={{ display: menuActive == false ? "none" : null }} className={style.buttonlistmobile}>

                <div className={style.buttonlistmobilebox}>
                    <ul >Muebles</ul>
                    <hr />


                    <ul>Calzado</ul>
                    <hr />
                    <ul>Colchones</ul>
                    <hr />

                    <ul >Herramientas</ul>
                    <hr />

                    <ul className={style.sale} >


                        Ofertas


                        <img style={{ color: "#DC1E0F", width: "22px", height: "22px" }} src={Group} alt="" /> </ul>


                </div>
            </li>



        </header>
    );
};

export default Header;