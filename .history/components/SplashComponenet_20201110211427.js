import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import * as Animatable from 'react-native-animated';

export default class SplashComponent extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require("../images/logo.png")}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    />
                </View>
                <View style={styles.footer}>
                    
                </View>
          </View>  
        );
    }
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4; 

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05375a"
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
    }
})