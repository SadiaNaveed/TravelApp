import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
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
                            Placeholder="your email..."
                            Style={styles.textInput}
                        />
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </View>

                    <Text style={[styles.text_Footer,{
                        marginTop:35
                    }]}>Password</Text>
                    <View style={style.action}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20} 
                        />
                        <TextInput 
                            Placeholder="your password..."
                            Style={styles.textInput}
                        />
                        <Feather
                            name="eye-off"
                            color="gray"
                            size={20}
                        />
                    </View>
                    <Text style={{ color: '#009bd1', marginTop: 15 }}>Fogot password?</Text>
                    <View style={styles.button}>
                </View>   
                </View>
                </View>
        )

    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05375a"
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
        fontSize: 30
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
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '05375a'
    },
    button: {
        alignItems:'center',
        marginTop: 50
    }
});