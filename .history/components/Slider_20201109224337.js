import React from "react";
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import Logo from "../images/logo.png";


const styles = StyleSheet.create({
   
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

const Slider = props => {
  return (
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>AlligatorChef</Text>
          <Text style={styles.h2}>
                Providing cajun bacon recipes since 1987.
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={Logo} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              //onPress={() => props.onLoginClick}
            />
          </View>
        </View>
      </View>
      
    );
};


export default Slider;