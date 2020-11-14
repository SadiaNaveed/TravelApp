import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

export default class SignIn extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <View style={styles.footer}>
                    
                </View>
         </View>   
        )

    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#05375a"
    }
})