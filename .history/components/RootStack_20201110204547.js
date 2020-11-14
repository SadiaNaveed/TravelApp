import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashComponent from "./SplashComponenet";
import Signin from "./Signin";
import Signup from "./Signup";

const StackNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashComponent,
        navigationOptions: {
            headerShown: false
        } 
    },
     SigninScreen: {
        screen: Signin,
        navigationOptions: {
            headerShown: false
        } 
    },
      SingupScreen: {
        screen: Signup,
        navigationOptions: {
            headerShown: false
        } 
    }
     
});