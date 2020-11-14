import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashComponent from "./SplashComponenet";
import Signin from "./Signin";
import Signup from "./Signup";
import SignIn from "./Signin";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SigninScreen" component={SignIn} />
        <Stack.Screen name="Travel Fantasies" component={SplashComponent} />

        <Stack.Screen name="SignupScreen" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
