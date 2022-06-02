import React, { useState } from "react";
import './App_Task4.css';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { useForm } from "react-hook-form";

function App() {
    return (
        <>
        <Inputs />
        </>
    )
}

function Inputs() {
    const [loginState, setLoginState] = useState()
    const [passwordState, setPasswordState] = useState()
    const {register, handleSubmit} = useForm('')
    const onSubmit = (data) => {setLoginState(JSON.stringify(data.Login)); 
        setPasswordState(JSON.stringify(data.Password))};
    return (
        <>
        <form className="field-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <TextField type="email" label="Email" variant="outlined" size="small" {...register("Login")} />
        <TextField label="Password" variant="outlined" size="small" {...register("Password")}/>
        <Buttons login={loginState} password={passwordState}/>
        </form>
        </>
    )
}

function Buttons(props) {
    const [loginState, setLoginState] = useState()
    const [passwordState, setPasswordState] = useState()
    return (
        <>
        <Button type="submit" variant="outlined" size="large" color="primary" onClick={() => {setLoginState(props.login);
        setPasswordState(props.password)}}>
            Push
        </Button>
        <DisplayInputs login={loginState} password={passwordState}/>
        </>
    )
}

function DisplayInputs(props) {
    return (
        <>
        <Paper variant="outlined">Login: {props.login}</Paper>
        <Paper variant="outlined">Password: {props.password}</Paper>
        </>
    )
}

export default App;