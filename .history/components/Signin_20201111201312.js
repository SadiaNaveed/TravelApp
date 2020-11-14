import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from "react-native-animatable";


export default class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            check_textInputChange: false,
            password: '',
         secureTextEntry: true   
        }
    }

    textInputChange(value) {
        if (value.lenght !== 0) {
            this.setState({
                check_textInputChange: true
            });
        }
        else {
            this.setState({
                check_textInputChange: false
            });
        }
    }
    secureTextEntry() {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}> Welcome </Text>  
                </View>
                <Animatable.View
                animation="fadeInUpBig"
                    style={styles.footer}>
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
                            onChangeText={(text)=>this.textInputChange(text)}
                        />
                        {this.state.check_textInputChange ?
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                            :null}
                    </View>

                    <Text style={[styles.text_Footer,{
                        marginTop:35
                    }]}>Password</Text>
                    <View style={style.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20} 
                        />
                        {this.state.secureTextEntry ?
                            <TextInput
                                Placeholder="your password..."
                                secureTextEntry={true}
                                Style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({
                                    password: text
                                })}
                            />
                            :
                            <TextInput
                                Placeholder="your password..."
                                Style={styles.textInput}
                                value={this.state.password}
                                onChangeText={(text) => this.setState({
                                    password: text
                                })}
                            />
                        }
                        <TouchableOpacity
                            onPress={()=>this.secureTextEntry()}
                        >
                            {this.state.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="gray"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="gray"
                                    size={20}
                                />
                            } 
                            </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#009bd1', marginTop: 15 }}>Fogot password?</Text>
                    <View style={styles.button}>
                        <LinearGradient
                            colors={['#5db8fe', '#39cff2']}
                            style={styles.signIn}>
                            <Text style={[styles.textSign,{
                                color:'white'
                            }]}>Sing In</Text>
                        </LinearGradient>

                        <TouchableOpacity
                            onpress={() => this.props.navigation.navigate("SignUpScreen")}
                            style={[styles.signIn, {
                                borderColor: '#4dc2f8',
                                borderWidth: 1,
                                marginTop:15
                            }]}>
                            <Text style={[styles.textSign], {
                                color:'#4dc2f8'
                            }}>sign Up</Text>
                            </TouchableOpacity>
                        
                </View>   
                </Animatable.View>
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
        alignItems: 'center',
        marginTop: 50
    },
    signIn:{
        width:'100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    },
    textSign: {
        fontSize: 18,
        fontWeight:'bold'
    }
});