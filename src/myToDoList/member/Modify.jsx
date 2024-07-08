import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from '../js/utils'
import { getLoginedSessionID } from '../js/session'

const Modify = () => {

    //hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        console.log('[Modify] useEffect');

        let myInfo = getMyInfo(getLoginedSessionID());

        if (myInfo === undefined) {
            alert('PLEASE SIGN IN!!');
            navigate('/signin');
            return;
            
        }

        setUId(myInfo.uId);
        setUPw(myInfo.uPw);
        setUMail(myInfo.uMail);
        setUPhone(myInfo.uPhone);

    }, []);

    // handler
    const uPwChangeHandler = (e) => {
        console.log('[Modify] uPwChangeHandler()');

        setUPw(e.target.value);

    }

    const uMailChangeHandler = (e) => {
        console.log('[Modify] uMailChangeHandler()');

        setUMail(e.target.value);

    }

    const uPhoneChangeHandler = (e) => {
        console.log('[Modify] uPhoneChangeHandler()');

        setUPhone(e.target.value);

    }

    const modifyBtnClickHandler = () => {
        console.log('[Modify] modifyBtnClickHandler()');

        

    }

    return(
        <div className="modify">
            <h3>Modify</h3>
            <input className="txt-basic" value={uId} type="text" readOnly />
            <br />
            <input className="txt-basic" value={uPw} type="password" onChange={uPwChangeHandler} placeholder="INPUT USER PW" />
            <br />
            <input className="txt-basic" value={uMail} type="email" onChange={uMailChangeHandler} placeholder="INPUT USER Mail" />
            <br />
            <input className="txt-basic" value={uPhone} type="text" onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE" />
            <br />
            <input className="btn-basic" type="button" value="Modify" onClick={modifyBtnClickHandler}/>
        </div>
    );
}

export default Modify;