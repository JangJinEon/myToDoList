import React, { useState } from "react";

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

    const signUpBtnClickHandler = () => {
        console.log('signUpBtnClickHandler()');
        
        let memDBInStorage = localStorage.getItem('memberDB');      // String
        if (memDBInStorage === null) {
            let newMemObj = {                                       // Object
                [uId]: {
                    'uPw': uPw,
                    'uMail': uMail,
                    'uPhone': uPhone
                }
            }

            let newMemStr = JSON.stringify(newMemObj);              // String
            localStorage.setItem('memberDB', newMemStr);

        } else {
            let memDBJsObj = JSON.parse(memDBInStorage);            // JS Object
            memDBJsObj[uId] = {
                'uPw': uPw,
                'uMail': uMail,
                'uPhone': uPhone
            };

            let newMemStr = JSON.stringify(memDBJsObj);             // String
            localStorage.setItem('memberDB', newMemStr);

        }

        let reservationDBInStorage = localStorage.getItem('reservationDB');     // String
        if (reservationDBInStorage === null) {

            let newReservationObj = {
                [uId]: {}
            }
            let newReservationStr = JSON.stringify(newReservationObj);
            localStorage.setItem('reservationDB', newReservationStr);

        } else {

            let reservationDBJsObj = JSON.parse(reservationDBInStorage);
            reservationDBJsObj[uId] = {};

            let newReservationStr = JSON.stringify(reservationDBJsObj);
            localStorage.setItem('reservationDB', newReservationStr);

        }

        alert('SIGN UP SUCCESS!!');

        props.homeViewer(true);
        props.signUpViewer(false);
        props.signInViewer(false);
        props.reservationViewer(false);
        props.reservationListViewer(false);

    }

    return(
        <div>
            <input type="text" name="u_id" onChange={uIdChangeHandler} placeholder="Input user ID"/>
            <br />
            <input type="password" name="u_pw" onChange={uPwChangeHandler} placeholder="Input user PW"/>
            <br />
            <input type="text" name="u_mail" onChange={uMailChangeHandler} placeholder="Input user MAIL"/>
            <br />
            <input type="text" name="u_phone" onChange={uPhoneChangeHandler} placeholder="Input user PHONE"/>
            <br />
            <input type="button" value="SIGN UP" onClick={signUpBtnClickHandler}/>
        </div>
    );
}

export default SignUp;