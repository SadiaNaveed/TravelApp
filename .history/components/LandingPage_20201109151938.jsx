import React from "react";
import { Button } from "react-native";


const LoginPage = props => {
    return (
        <Button title="Login" onPress={props.LoginClick} />
        
    );
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
  width: 300,
  height: 260,
  justifyContent: 'center',
  },
  buttonContainer: {
  backgroundColor: '#008F68',
  borderRadius: 5,
  padding: 8,
    margin: 8,
  
},
  button: {
  backgroundColor: '#008F68',
  color:"black",
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
});
export default LoginPage;