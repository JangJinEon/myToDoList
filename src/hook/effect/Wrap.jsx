import React, { useEffect, useState } from "react";

const DivComp = () => {

    // hook
    useEffect(() => {
        console.log('DivComp useEffect() CALLED!!');

        return() => {
            console.log('DivComp will be unmounted!!');
        }

    });

    return(
        <>
            Div Component
        </>
    );
}



const Wrap = () => {

    // variable
    let count = 0;

    //hook
    const [countState, setCountState] = useState(0);
    const [isShowDivComp, setIsShowDivComp] = useState();
    useEffect(() => {
        console.log('Wrap useEffect() CALLED!!');

    }, []);

    // 의존배열 X : 컴포넌트가 마운트, 업데이팅 될 때마다 매번 콜백 실행
    // 의존배열 [] : 컴포넌트가 마운트, 언마운트 될 때 콜백 실행
    // 의존배열 [countState] : 컴포넌트가 마운트, countState가 변경될 때 콜백 실행

    //handler
    const countDownClickHandler = () => {
        console.log('countDownClickHandler()');
        count--;
        console.log('count: ', count);
    }

    const countUpClickHandler = () => {
        console.log('countUpClickHandler()');
        count++;
        console.log('count: ', count);
    }

    const countStateDownClickHandler = () => {
        console.log('countStateDownClickHandler()');

        let temp = countState;
        temp--;
        setCountState(temp);

    }

    const countStateUpClickHandler = () => {
        console.log('countStateUpClickHandler()');

        let temp = countState;
        temp++;
        setCountState(temp);
        
    }

    const divBtnClickHandler = () => {
        console.log('divBtnClickHandler()');

        setIsShowDivComp(v => !v);
    }

    return(
        <>
            <button onClick={countDownClickHandler}>{`COUNT DOWN ${count}`}</button>
            <br />
            <button onClick={countUpClickHandler}>{`COUNT UP ${count}`}</button>
            <br />
            <button onClick={countStateDownClickHandler}>{`COUNT STATE DOWN ${countState}`}</button>
            <br />
            <button onClick={countStateUpClickHandler}>{`COUNT STATE UN ${countState}`}</button>
            <br /><br />
            {
                isShowDivComp
                ?
                <>
                    <button onClick={divBtnClickHandler}>Hide div</button>
                </>
                :
                <button onClick={divBtnClickHandler}>Show div</button>
            }
            <DivComp />
            
            
        </>
    );
}

export default Wrap;