import React, { useState } from "react";
import "./app.css"

let intervalID;
let picNames = ['pic01', 'pic02', 'pic03', 'pic04', 'pic05']

const App = () => {

    //hook
    const [isStop, setIsStop] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);

    // handler
    const playBtnClickHandler = () => {
        console.log('playBtnClickHandler()');

        setIsStop(false);

        intervalID = setInterval(changePic, 1000);

    }

    const stopBtnClickHandler = () => {
        console.log('stopBtnClickHandler()');

        setIsStop(true);
        clearInterval(intervalID);
    }

    //function
    const changePic = () => {
        console.log('changePic()');

        setCurrentIdx((pv) => {
            pv++;
            if(pv >= picNames.length) pv = 0;
            return pv;
        });
    }

    return(
        <div id="wrap">
            <div className="pic_wrap">
                <img src={`resources/event/interval/${picNames[currentIdx]}.jpg`} />
            </div>

            <div className="btns">
                {
                    isStop
                    ?
                    <button onClick={playBtnClickHandler}>PLAY</button>
                    :
                    <button onClick={stopBtnClickHandler}>STOP</button>
                }                
            </div>
        </div>
    ); 
}

export default App;