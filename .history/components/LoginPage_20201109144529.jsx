import React from "react";
import { Button } from "react-native";


const LoginPage = props => {
    return (
        <Button title="Login" onPress={props.LoginClick} />
        
    );
}

export default LoginPage;