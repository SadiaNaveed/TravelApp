import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashComponent from "./SplashComponenet";
import Signin from "./Signin";
import Signup from "./Signup";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TravelFantasies" component={SplashComponent} />
        <Stack.Screen name="SigninScreen" component={Signin} />
        <Stack.Screen name="SignupScreen" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
