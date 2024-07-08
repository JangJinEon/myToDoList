import React, { useEffect, useState } from "react";
import { getMyMemObj,
         getMemoServiceMemberDB, setMemoServiceMemberDB,
         getMemoServiceMemoDB, setMemoServiceMemoDB } from '../const/const.js';
import { getLoginedSessionID, setLoginedSessionID } from '../session.js';
import { getCurrentDateTime } from '../utils.js';

const Modify = (props) => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    useEffect(() => {
        console.log('useEffect()');

        let memObj = getMyMemObj(getLoginedSessionID());

        setUId(memObj.uId);
        setUPw(memObj.uPw);
        setUMail(memObj.uMail);
        setUPhone(memObj.uPhone);

    }, []);

    // handler
    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler()');
        setUId(e.target.value);

    }

    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler()');
        setUPw(e.target.value);

    }

    const uMailChangeHandler = (e) => {
        console.log('uMailChangeHandler()');
        setUMail(e.target.value);

    }

    const uPhoneChangeHandler = (e) => {
        console.log('uPhoneChangeHandler()');
        setUPhone(e.target.value);

    }

    const modifyBtnClickHandler = () => {
        console.log('modifyBtnClickHandler()');

        let memDBInStorage = getMemoServiceMemberDB();  // String
        let memDBJsObj = JSON.parse(memDBInStorage);
        memDBJsObj[uId] = {
            'uId': uId,
            'uPw': uPw,
            'uMail': uMail,
            'uPhone': uPhone,
            'uRegDate': memDBJsObj[uId].uRegDate,
            'uModDate': getCurrentDateTime(),
        }

        setMemoServiceMemberDB(memDBJsObj);

        alert('MEMBER MODIFY SUCCESS!!');

        props.homeViewer(true);
        props.signUpViewer(false);
        props.signInViewer(false);
        props.modifyViewer(false);
        props.memoViewer(false);
        props.memoListViewer(false);

    }

    const deleteBtnClickHandler = () => {
        console.log('deleteBtnClickHandler()');

        let result = window.confirm('Really?');
        if (result) {

            // DELETE MEMBER
            let memDBInStorage = getMemoServiceMemberDB();  // String
            let memDBJsObj = JSON.parse(memDBInStorage);    // Object

            delete memDBJsObj[getLoginedSessionID()];

            setMemoServiceMemberDB(memDBJsObj);

            // DELETE MEMO
            let memoDBInStorage = getMemoServiceMemoDB();   // String
            let memoDBJsObj = JSON.parse(memoDBInStorage);  // Object

            delete memoDBJsObj[getLoginedSessionID()];

            setMemoServiceMemoDB(memoDBJsObj);

            alert('DELETE COMPLETED!!');    // Alert
            setLoginedSessionID();          // Log out

            props.homeViewer(true);         // View change
            props.signUpViewer(false);
            props.signInViewer(false);
            props.modifyViewer(false);
            props.memoViewer(false);
            props.memoListViewer(false);
            
            props.changeMenuBar(false);     // Menu change

        }

    }

    return(
        <div id="modify">
            <input type="text" className="txt_field" value={uId} name="u_id" onChange={uIdChangeHandler} readOnly placeholder="INPUT USER ID"/>
            <br />
            <input type="password" className="txt_field" value={uPw} name="u_pw" onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input type="email" className="txt_field" value={uMail} name="u_mail" onChange={uMailChangeHandler} placeholder="INPUT USER MAIL"/>
            <br />
            <input type="text" className="txt_field" value={uPhone} name="u_phone" onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE"/>
            <br />
            <input type="button" className="basic_btn" value="MODIFY" onClick={modifyBtnClickHandler}/>
            <input type="button" className="basic_btn" value="DELETE" onClick={deleteBtnClickHandler}/>
        </div>
    );
}

export default Modify;