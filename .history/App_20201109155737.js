import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
//import LandingPage from './components/LandingPage';

const state={
    email:"",
    password:""
}    
  
export default class App extends React.Component {
  
  // LoginClick = () => {
  //   console.log("Login Clicked");
  // }

  render() {
 
    return (
      <View style={styles.container}>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })} />
           <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
                  <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
                  <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
   logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
    inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
    inputText:{
    height:50,
    color:"white"
  },
    forgot:{
    color:"white",
    fontSize:11
  },
 loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
    
});