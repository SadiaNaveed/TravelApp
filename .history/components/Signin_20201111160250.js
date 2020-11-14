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
                    <Text style={styles.textHeader}> Welcome </Text>  
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
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    }
})