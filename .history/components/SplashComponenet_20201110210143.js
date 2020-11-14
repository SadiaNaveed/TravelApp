import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export default class SplashComponent extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.header}>
                    
                </View>
                <View style={styles.footer}>
                    
                </View>
          </View>  
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05375a"
    }
})