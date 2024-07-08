import React, { useState } from "react";
import '/wrap.css'

const App2 = () => {
    
    // Hook
    const [isShow, setIsShow] = useState(true);

    // Event Handler
    const upDownBtnClickHandler = () => {
        console.log('upDownBtnClickHandler()');

        setIsShow(v => !v)

    }

    return(
        <div id="menu_wrap">
            {
                isShow
                ?
                <>
                    <div className="menus">
                        <img src="/resources/event/imgs/866-1000x200.jpg" />
                    </div>
                    <div className="up_down_arrow" onClick={upDownBtnClickHandler}>
                        <a href="#none">
                            <img src="/resources/event/imgs/up_arrow.jpg" />
                        </a>
                    </div>
                </>
                :
                <>
                    <div className="up_down_arrow">
                    <a href="#none">
                        <img src="/resources/event/imgs/down_arrow.jpg" />
                    </a>
                    </div>
                </>
            }
            
            <div className="menus">
                <img src="/resources/event/imgs/866-1000x200.jpg" />
            </div>
            <div className="up_down_arrow">
                <a href="#none">
                    <img src="/resources/event/imgs/up_arrow.jpg" />
                </a>
            </div>
            <div className="up_down_arrow">
                <a href="#none">
                    <img src="/resources/event/imgs/down_arrow.jpg" />
                </a>
            </div>
        </div>
    );
}

export default App2;