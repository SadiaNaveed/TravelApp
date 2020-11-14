import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class SignIn extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}> Welcome </Text>  
                </View>
                <View style={styles.footer}>
                    <Text style={styles.textFooter}>E-mail</Text>
                    <View style={style.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20} 
                        />
                        <TextInput
                        
                        />
                </View>
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
    },
    textHeader: {
        color: "white",
        fontWeight: "bold",
        fontSize:30
    },
    textFooter: {
        color: "#05375a",
        fontSize: 18
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom:5
    }
})