import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import LandingPage from "./components/LandingPage";
import LoginPage from './components/LoginPage';
// import { StackNavigator } from 'react-navigation';

export default class App extends Component {
 render()
 {
    return(
          <LoginPage/>
    );
 }
}


