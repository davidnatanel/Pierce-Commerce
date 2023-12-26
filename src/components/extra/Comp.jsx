import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
let ar = [

    {
        name: "1",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220"
    },
    {
        name: "2",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=111"
    },
    {
        name: "3",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=212"
    },
    {
        name: "4",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=213"
    },
    {
        name: "5",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=214"
    },
    {
        name: "6",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=215"
    },


    {
        name: "7",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220"
    },
    {
        name: "8",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=111"
    },
    {
        name: "9",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=212"
    },
    {
        name: "10",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=213"
    },
    {
        name: "11",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=214"
    },
    {
        name: "12",
        img: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=215"
    },



]


export default function Comp() {
    const myRef = useRef();
    const itemRefs = useRef(ar.map(() => React.createRef()));
    const [limitMove, setLimitMove] = useState(0);


    const moveRigth = () => {
        const element = myRef.current;

        if (limitMove < ar.length) {
            setLimitMove(limitMove + 1);

            if (element) {
                element.scrollLeft += itemRefs.current.offsetWidth;
            }
        }
    };




    const moveleft = () => {
        const element = myRef.current;


        if (limitMove > 0) {
            setLimitMove(limitMove - 1);

            if (element) {
                element.scrollLeft -= itemRefs.current.offsetWidth;

            }
        }
    };



    return (
        <div className="App">
            <h1>Carrusel</h1>
            <div className="carrousel-list">
                <div className="carrousel-track">
                    <div ref={myRef} className="carrousel">
                        {ar.map((i) => {
                            return <div ref={itemRefs} className="item">
                                <img src={i.img} alt="" />
                                {i.name}</div>;
                        })}
                    </div>
                </div>
                <button onClick={() => moveleft()} className="left">
                    {"<"}atras
                </button>
                <button onClick={() => moveRigth()} className="rigth">
                    {">"}adelante
                </button>

            </div>
        </div>
    );
}
