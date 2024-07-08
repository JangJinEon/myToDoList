import React from "react";

const Thum = (props) => {

    const thumClickHandler = (pn) => {
        console.log('thumClickHandler()');
        console.log('pn: ', pn);

        props.setIsShow(true);
        props.setPicNo(pn);
    }

    return(
        <div>
            <a href="#none" onClick={() => thumClickHandler(props.pNo)}>
                <img className="thum" src={`/resources/event/imgs/pic0${props.pNo}.jpg`}/>
            </a>
        </div>
    );
}

export default Thum;