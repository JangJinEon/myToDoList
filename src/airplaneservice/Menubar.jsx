import React, { useState } from "react";
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Reservation from './Reservation';
import ReservationList from './ReservationList';

import { getLoginedSessionID } from './session.js';

const Menubar = () => {
    
    // hook
    const [isHome, setIsHome] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isReservation, setIsReservation] = useState(false);
    const [isReservationList, setIsReservationList] = useState(false);

    const [isLogined, setIsLogined] = useState(false);

    // handler
    const homeClickHandler = () => {
        console.log("homeClickHandler()");

        setIsHome(true);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(false);

    }

    const signOutClickHandler = () => {
        console.log("signOutClickHandler()");
        
        setIsHome(true);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(false);

        setIsLogined(false);

    }

    const signUpClickHandler = () => {
        console.log("signUpClickHandler()");
        
        setIsHome(false);
        setIsSignUp(true);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(false);

    }

    const signInClickHandler = () => {
        console.log("signInClickHandler()");
        
        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(true);
        setIsReservation(false);
        setIsReservationList(false);

    }

    const reservationClickHandler = () => {
        console.log("reservationClickHandler()");

        if (getLoginedSessionID() === '') {
            alert('Please SIGN IN!!');

            setIsHome(false);
            setIsSignUp(false);
            setIsSignIn(true);
            setIsReservation(false);
            setIsReservationList(false);

            return;

        }

        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(true);
        setIsReservationList(false);
        
    }

    const reservationListClickHandler = () => {
        console.log("reservationListClickHandler()");
        
        if (getLoginedSessionID() === '') {
            alert('Please SIGN IN!!');

            setIsHome(false);
            setIsSignUp(false);
            setIsSignIn(true);
            setIsReservation(false);
            setIsReservationList(false);

            return;

        }
        
        setIsHome(false);
        setIsSignUp(false);
        setIsSignIn(false);
        setIsReservation(false);
        setIsReservationList(true);

    }

    return(
        <>
            <div>
                <a href="#none" onClick={homeClickHandler}>HOME</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                {
                    isLogined
                    ?
                    <>
                        <a href="#none" onClick={signOutClickHandler}>SIGN-OUT</a>
                        &nbsp;&nbsp; | &nbsp;&nbsp;
                    </>
                    :
                    <>
                        <a href="#none" onClick={signUpClickHandler}>SIGN-UP</a>
                        &nbsp;&nbsp; | &nbsp;&nbsp;
                        <a href="#none" onClick={signInClickHandler}>SIGN-IN</a>
                        &nbsp;&nbsp; | &nbsp;&nbsp;
                    </>
                }
                <a href="#none" onClick={reservationClickHandler}>RESERVATION</a>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <a href="#none" onClick={reservationListClickHandler}>RESERVATION-LIST</a>
            </div>
            {
                isHome
                ?
                <Home />
                :
                null
            }
            {
                isSignUp
                ?
                <SignUp 
                    homeViewer={setIsHome} 
                    signUpViewer={setIsSignUp} 
                    signInViewer={setIsSignIn} 
                    reservationViewer={setIsReservation} 
                    reservationListViewer={setIsReservationList} />
                :
                null
            }
            {
                isSignIn
                ?
                <SignIn 
                    homeViewer={setIsHome} 
                    signUpViewer={setIsSignUp} 
                    signInViewer={setIsSignIn} 
                    reservationViewer={setIsReservation} 
                    reservationListViewer={setIsReservationList} 
                    changeMenuBar={setIsLogined}/>
                :
                null
            }
            {
                isReservation
                ?
                <Reservation 
                    homeViewer={setIsHome} 
                    signUpViewer={setIsSignUp} 
                    signInViewer={setIsSignIn} 
                    reservationViewer={setIsReservation} 
                    reservationListViewer={setIsReservationList}
                    />
                :
                null
            }
            {
                isReservationList
                ?
                <ReservationList />
                :
                null
            }

        </>
    );
}

export default Menubar;