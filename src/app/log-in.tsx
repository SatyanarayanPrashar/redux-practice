"use client"

import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-Slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";

export default function LogIn() {
    const [username, setUsername] =useState("");
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);


    const dispatch = useDispatch<AppDispatch>();

    const onClickLogIn = () =>{
        dispatch(logIn(username));
    };
    const onClickToggle = () =>{
        dispatch(toggleModerator());
    };
    const onClickLogOut = () =>{
        dispatch(logOut());
    };
    
    return (
        <div>
            <input type="text" onChange={ (e) => setUsername(e.target.value) }/>
            <br /> <br />
            <button onClick={onClickLogIn}>Log In</button>
            <br /> <br />
            <button onClick={onClickLogOut}>Log Out</button>
            <br /> <br />
            {isAuth && 
                <button onClick={onClickToggle}>Toogle Moderator Status</button>
            }
        </div>
    )
}