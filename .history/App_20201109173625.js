import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import LoginPage from './components/LandingPage';

export default class App extends React.Component {
  
  LoginPageClicked = () => {
    console.log("Login Clicked");
  }

  render(){
    return (
      <View style={styles.container}>
       <LoginPage onLoginClick={this.LoginPageClicked} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //003f5c
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   topContainer: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
middleContainer: {
  flex: 3,
  justifyContent: 'flex-start',
  alignItems: 'center',
},
bottomContainer: {
  justifyContent: 'flex-end',
  width: '90%',
  margin: 20,
  padding: 10,
},
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#8DD5D5",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:70,
    color:"white"
  },
  forgot:{
    color:"#337171",
    fontSize:20
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#337171",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});