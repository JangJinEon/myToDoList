import React, { useState } from "react";
import { getProdFlag, getCurrentDateTime } from './utils.js';
import { getLoginedSessionID } from "./session.js";

const Reservation = (props) => {

    // hook
    const [rName, setRName] = useState('');
    const [rMail, setRMail] = useState('');
    const [rPhone, setRPhone] = useState('');
    const [rSP, setRSP] = useState('');
    const [rSPT, setRSPT] = useState('');
    const [rEP, setREP] = useState('');
    const [rEPT, setREPT] = useState('');
    const [rAdultCnt, setRAdultCnt] = useState(0);
    const [rChildCnt, setRChildCnt] = useState(0);
    const [rInfantCnt, setRInfantCnt] = useState(0);

    // handler
    const rNameChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rNameChangeHandler()');
        setRName(e.target.value);

    }

    const rMailChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rMailChangeHandler()');
        setRMail(e.target.value);

    }

    const rPhoneChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rPhoneChangeHandler()');
        setRPhone(e.target.value);

    }

    const rSPChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rSPChangeHandler()');
        setRSP(e.target.value);

    }

    const rSPTChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rSPTChangeHandler()');
        setRSPT(e.target.value);

    }

    const rEPChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rEPChangeHandler()');
        setREP(e.target.value);

    }

    const rEPTChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rEPTChangeHandler()');
        setREPT(e.target.value);

    }

    const rAdultCntChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rAdultCntChangeHandler()');
        setRAdultCnt(e.target.value);

    }

    const rChildCntChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rChildCntChangeHandler()');
        setRChildCnt(e.target.value);

    }

    const rInfantCntChangeHandler = (e) => {
        if (!getProdFlag()) console.log('rInfantCntChangeHandler()');
        setRInfantCnt(e.target.value);

    }

    const reservationBtnClickHandler = () => {
        if (!getProdFlag()) console.log('reservationBtnClickHandler()');
        
        let reservationDBInStorage = localStorage.getItem('reservationDB');      // String
        let reservationObj = JSON.parse(reservationDBInStorage);                 // Reservation Obj(All reservation)
        let myReservationObjs = reservationObj[getLoginedSessionID()];           // My Reservation Objs
        if (!getProdFlag()) console.log('myReservationObjs::::::: ', myReservationObjs);

        myReservationObjs[getCurrentDateTime()] = {
            'rName'         : rName,
            'rMail'         : rMail,
            'rPhone'        : rPhone,
            'rSP'           : rSP,
            'rSPT'          : rSPT,
            'rEP'           : rEP,
            'rEPT'          : rEPT,
            'rAdultCnt'     : rAdultCnt,
            'rChildCnt'     : rChildCnt,
            'rInfantCnt'    : rInfantCnt,
        }

        reservationObj[getLoginedSessionID()] = myReservationObjs;
        reservationDBInStorage = JSON.stringify(reservationObj);            // String
        localStorage.setItem('reservationDB', reservationDBInStorage);

        alert('RESERVATION SUCCESS!!');

        props.homeViewer(false);
        props.signUpViewer(false);
        props.signInViewer(false);
        props.reservationViewer(false);
        props.reservationListViewer(true);

    }   
    

    return(
        <>
            <input type="text" name="rName" onChange={rNameChangeHandler} placeholder="Input name"/>
            <br />
            <input type="text" name="rMail" onChange={rMailChangeHandler} placeholder="Input mail"/>
            <br />
            <input type="text" name="rPhone" onChange={rPhoneChangeHandler} placeholder="Input phone"/>
            <br />
            <input type="text" name="rStartPoint" onChange={rSPChangeHandler} placeholder="Input start point"/>
            <br />
            <input type="text" name="rStartPointTime" onChange={rSPTChangeHandler} placeholder="Input start point time"/>
            <br />
            <input type="text" name="rEndPoint" onChange={rEPChangeHandler} placeholder="Input end point"/>
            <br />
            <input type="text" name="rEndPointTime" onChange={rEPTChangeHandler} placeholder="Input end point time"/>
            <br />
            <select name="rAdultCnt" onChange={rAdultCntChangeHandler}>
                <option value="">--- 성인수(만18세이상) ---</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <br />
            <select name="rChild" onChange={rChildCntChangeHandler}>
                <option value="">--- 어린이수(만7세이상 ~ 만18세미만) ---</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <br />
            <select name="rInfantCnt" onChange={rInfantCntChangeHandler}>
                <option value="">--- 유아수(만7세미만) ---</option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
            </select>
            <br />
            <input type="button" value="RESERVATION" onClick={reservationBtnClickHandler}/>
        </>
    );
}

export default Reservation;