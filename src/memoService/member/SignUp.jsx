import React, { useState } from "react";
import { getMemoServiceMemberDB, 
         setMemoServiceMemberDB, 
         getMemoServiceMemoDB, 
         setMemoServiceMemoDB } from '../const/const.js';
import { getCurrentDateTime } from '../utils.js';

const SignUp = (props) => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

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

    const signUpBtnClickHandler = (e) => {
        console.log('signUpBtnClickHandler()');
        
        let memDBInStorage = getMemoServiceMemberDB();
        if (memDBInStorage === null) {
            let newMemObj = {
                [uId]: {
                    'uId': uId,
                    'uPw': uPw,
                    'uMail': uMail,
                    'uPhone': uPhone,
                    'uRegDate': getCurrentDateTime(),
                    'uModDate': getCurrentDateTime(),
                }
            }

            setMemoServiceMemberDB(newMemObj);

        } else {

            let memDBJsObj = JSON.parse(memDBInStorage);
            memDBJsObj[uId] = {
                'uId': uId,
                'uPw': uPw,
                'uMail': uMail,
                'uPhone': uPhone,
                'uRegDate': getCurrentDateTime(),
                'uModDate': getCurrentDateTime(),
            }

            setMemoServiceMemberDB(memDBJsObj);

        }

        let memoDBInStorage = getMemoServiceMemoDB();
        if (memoDBInStorage === null) {
            let newMemoObj = {
                [uId]: {},
            }
            setMemoServiceMemoDB(newMemoObj);

        } else {
            let memoDBJsObj = JSON.parse(memoDBInStorage);
            memoDBJsObj[uId] = {};

            setMemoServiceMemoDB(memoDBJsObj);

        }

        alert('SIGN UP SUCCESS!!');

        props.homeViewer(false);
        props.signUpViewer(false);
        props.signInViewer(true);
        props.memoViewer(false);
        props.memoListViewer(false);

    }

    return(
        <div id="sign_up">
            <input type="text" className="txt_field" name="u_id" onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input type="password" className="txt_field" name="u_pw" onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input type="email" className="txt_field" name="u_mail" onChange={uMailChangeHandler} placeholder="INPUT USER MAIL"/>
            <br />
            <input type="text" className="txt_field" name="u_phone" onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE"/>
            <br />
            <input type="button" className="basic_btn" value="SIGN UP" onClick={signUpBtnClickHandler}/>
        </div>
    );
}

export default SignUp;