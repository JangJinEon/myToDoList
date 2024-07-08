import React, { useState } from "react";
import { getMyMemObj } from '../const/const.js';
import { setLoginedSessionID } from '../session.js';

const SignIn = (props) => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');

    // handler
    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler()');
        setUId(e.target.value);
    }

    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler()');
        setUPw(e.target.value);
    }

    const signInBtnClickHandler = () => {
        console.log('signInBtnClickHandler()');

        let memObj = getMyMemObj(uId);
        if (memObj !== undefined && memObj.uPw === uPw) {
            // 아이디 존재 O and 로그인 성공!!
            alert('SIGN IN SUCCESS!!');

            props.homeViewer(true);
            props.signUpViewer(false);
            props.signInViewer(false);
            props.memoViewer(false);
            props.memoListViewer(false);

            props.changeMenuBar(true);

            setLoginedSessionID(uId);

        } else {
            // 아이디 존재 X
            alert('SIGN IN FAIL!!');

            props.homeViewer(false);
            props.signUpViewer(false);
            props.signInViewer(true);
            props.memoViewer(false);
            props.memoListViewer(false);

            setUId('');
            setUPw('');

            setLoginedSessionID();

        }

    }

    return(
        <div id="sign_in">
            <input type="text" className="txt_field" name="u_id" value={uId} onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input type="password" className="txt_field" name="u_pw" value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input type="button" className="basic_btn" value="SIGN IN" onClick={signInBtnClickHandler}/>
        </div>
    );
}

export default SignIn;