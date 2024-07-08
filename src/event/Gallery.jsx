import React, { useState } from "react";
import './gallery.css';

const Gallery = () => {

    // Hook
    const [isShow, setIsShow] = useState(false);    // modal state
    const [picNo,setPicNo] = useState(1);         // pic no state

    // Handler
    const modalBgClickHandler = () => {
        console.log('modalBgClickHandler()');

        setIsShow(false);

    }

    const thumClickHandler = (pn) => {
        console.log('thumClickHandler()');
        console.log('pn: ', pn);

        setIsShow(true);
        setPicNo(pn);
        
    }

    return(
        <div id="wrap">
            <div className="thums">
                <div>
                    <a href="#none" onClick={() => thumClickHandler(1)}>
                        <img className="thum" src="/resources/event/imgs/pic01.jpg"/>
                    </a>
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(2)}>
                        <img className="thum" src="/resources/event/imgs/pic02.jpg"/>
                    </a>
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(3)}>
                        <img className="thum" src="/resources/event/imgs/pic03.jpg"/>
                    </a>
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(4)}>
                        <img className="thum" src="/resources/event/imgs/pic04.jpg"/>
                    </a>
                </div>
                <div>
                    <a href="#none" onClick={() => thumClickHandler(5)}>
                        <img className="thum" src="/resources/event/imgs/pic05.jpg"/>
                    </a>
                </div>
            </div>

            {
                isShow
                ?
                    <div className="modal_bg" onClick={modalBgClickHandler}>
                        <div className="modal">
                            <a href="#none">
                                <img src={`/resources/event/imgs/pic0${picNo}.jpg`}/>
                            </a>
                        </div>
                    </div>
                :
                <>
                </>
            }

            

        </div>
    );
}

export default Gallery;