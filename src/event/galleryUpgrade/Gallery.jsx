import React, { useState } from "react";
import './gallery.css';
import Thum from "./Thum";

const Gallery = () => {

    // Hook
    const [isShow, setIsShow] = useState(false);    // modal state
    const [picNo, setPicNo] = useState(1);          // pic no state

    // Handler
    const modalBgClickHandler = () => {
        console.log('modalBgClickHandler()');
        
        setIsShow(false);
        
    }
    
    // const thumClickHandler = (pn) => {
    //     console.log('thumClickHandler()');
    //     console.log('pn: ', pn);

    //     setIsShow(true);
    //     setPicNo(pn);
    // }

    const arrowBtnClickHandler = (btnName) => {
        console.log('arrowBtnClickHandler()');
        console.log('btnName: ', btnName);

        let tempNo;
        switch(btnName) {
            case 'leftArwBtn':
                tempNo = picNo;
                tempNo--;
                if (tempNo <= 0) tempNo = 5;
                setPicNo(tempNo);
                break;
            case 'rightArwBtn':
                tempNo = picNo;
                tempNo++;
                if (tempNo > 5) tempNo = 1;
                setPicNo(tempNo);
                break;
        }

    }

    return(
        <div id="wrap">
            <div className="thums">
                <Thum pNo="1" setIsShow={setIsShow} setPicNo={setPicNo} />
                <Thum pNo="2" setIsShow={setIsShow} setPicNo={setPicNo} />
                <Thum pNo="3" setIsShow={setIsShow} setPicNo={setPicNo} />
                <Thum pNo="4" setIsShow={setIsShow} setPicNo={setPicNo} />
                <Thum pNo="5" setIsShow={setIsShow} setPicNo={setPicNo} />
                {/* <div>
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
                </div> */}
            </div>

            {
                isShow
                ?
                    <div className="modal_bg">
                        <div className="left_arrow">
                            <a href="#none" onClick={() => arrowBtnClickHandler('leftArwBtn')}>
                                <img src="/resources/event/imgs/left_arrow.png"/>
                            </a>
                        </div>
                        <div className="modal">
                            <a href="#none">
                                <img src={`/resources/event/imgs/pic0${picNo}.jpg`}/>
                            </a>
                            <br />
                            <a href="#none" style={
                                    {
                                        color:'#fff', 
                                        fontWeight: 'bold'
                                    }
                                } onClick={modalBgClickHandler}>CLOSE</a>
                        </div>
                        <div className="right_arrow">
                            <a href="#none" onClick={() => arrowBtnClickHandler('rightArwBtn')}>
                                <img src="/resources/event/imgs/right_arrow.png"/>
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