import React from "react";
import { Dimensions, StatusBar, StyleSheet, View, Animated } from "react-native";

export default class SplashComponent extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    <Animated.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require("../images/logo.png")}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    />
                </View>
               
                <Animated.View
                    style={styles.footer}
                    // animation="fadeInUpBig"
                        <Text style={styles.title}> Stay Connected with everyone! </Text>
                        <Text style={styles.text}> Sign in with account</Text>
                </Animated.View>
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
    },
    title: {
        color: "#05375a",
        fontWeight: "bold",
        fontSize: 30
    },
    text: {
        color: "grey",
        marginTop: 5
    }
})