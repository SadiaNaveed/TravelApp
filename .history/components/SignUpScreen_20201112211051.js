// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Feather from "react-native-vector-icons/Feather";
// import LinearGradient from "react-native-linear-gradient";
// import * as Animatable from "react-native-animatable";
// export default class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       check_textInputChange: false,
//       password: "",
//       password_confirm: "",
//       secureTextEntry: true,
//       secureTextEntry_confirm: true,
//     };
//   }

//   textInputChange(value) {
//     if (value.lenght !== 0) {
//       this.setState({
//         check_textInputChange: true,
//       });
//     } else {
//       this.setState({
//         check_textInputChange: false,
//       });
//     }
//   }
//   secureTextEntry() {
//     this.setState({
//       secureTextEntry: !this.state.secureTextEntry,
//     });
//   }
//   secureTextEntry_confirm() {
//     this.setState({
//       secureTextEntry_confirm: !this.state.secureTextEntry_confirm,
//     });
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.textHeader}> Welcome </Text>
//         </View>
//         <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//           <Text style={styles.textFooter}>E-mail</Text>
//           <View style={styles.action}>
//             <FontAwesome name="user-o" color="#05375a" size={20} />
//             <TextInput
//               Placeholder="your email..."
//               Style={styles.textInput}
//               onChangeText={(text) => this.textInputChange(text)}
//             />
//             {this.state.check_textInputChange ? (
//               <Animatable.View animation="bounceIn">
//                 <Feather name="check-circle" color="green" size={20} />
//               </Animatable.View>
//             ) : null}
//           </View>

//           <Text
//             style={[
//               styles.text_Footer,
//               {
//                 marginTop: 35,
//               },
//             ]}
//           >
//             Password
//           </Text>
//           <View style={styles.action}>
//             <Feather name="lock" color="#05375a" size={20} />
//             {this.state.secureTextEntry ? (
//               <TextInput
//                 Placeholder="your password..."
//                 secureTextEntry={true}
//                 Style={styles.textInput}
//                 value={this.state.password}
//                 onChangeText={(text) =>
//                   this.setState({
//                     password: text,
//                   })
//                 }
//               />
//             ) : (
//               <TextInput
//                 Placeholder="your password..."
//                 style={styles.textInput}
//                 value={this.state.password}
//                 onChangeText={(text) =>
//                   this.setState({
//                     password: text,
//                   })
//                 }
//               />
//             )}
//             <TouchableOpacity onPress={() => this.secureTextEntry()}>
//               {this.state.secureTextEntry ? (
//                 <Feather name="eye-off" color="gray" size={20} />
//               ) : (
//                 <Feather name="eye" color="gray" size={20} />
//               )}
//             </TouchableOpacity>
//           </View>
//           <Text
//             style={[
//               styles.text_Footer,
//               {
//                 marginTop: 35,
//               },
//             ]}
//           >
//             Confirm Password
//           </Text>
//           <View style={styles.action}>
//             <Feather name="lock" color="#05375a" size={20} />
//             {this.state.secureTextEntry_confirm ? (
//               <TextInput
//                 Placeholder="Confirm password..."
//                 secureTextEntry={true}
//                 style={styles.textInput}
//                 value={this.state.password_confirm}
//                 onChangeText={(text) =>
//                   this.setState({
//                     password_confirm: text,
//                   })
//                 }
//               />
//             ) : (
//               <TextInput
//                 Placeholder="Confirm password..."
//                 style={styles.textInput}
//                 value={this.state.password_confirm}
//                 onChangeText={(text) =>
//                   this.setState({
//                     password_confirm: text,
//                   })
//                 }
//               />
//             )}
//             <TouchableOpacity onPress={() => this.secureTextEntry_confirm()}>
//               {this.state.secureTextEntry_confirm ? (
//                 <Feather name="eye-off" color="gray" size={20} />
//               ) : (
//                 <Feather name="eye" color="gray" size={20} />
//               )}
//             </TouchableOpacity>
//           </View>

//           <View style={styles.textPrivate}>
//             <Text style={styles.color_textPrivate}>
//               {" "}
//               By Signing up you agree to our
//             </Text>
//             <Text
//               style={[
//                 styles.color_textPrivate,
//                 {
//                   fontWeight: "bold",
//                 },
//               ]}
//             >
//               {""}Terms of Service
//             </Text>
//             <Text style={styles.color_textPrivate}>{""} and </Text>
//             <Text
//               style={[
//                 styles.color_textPrivate,
//                 {
//                   fontWeight: "bold",
//                 },
//               ]}
//             >
//               {""}Privacy Policy
//             </Text>
//           </View>
//           <View style={styles.button}>
//             <LinearGradient
//               colors={["#5db8fe", "#39cff2"]}
//               style={styles.signIn}
//             >
//               <Text
//                 style={[
//                   styles.textSign,
//                   {
//                     color: "white",
//                   },
//                 ]}
//               >
//                 Sing In
//               </Text>
//             </LinearGradient>
//           </View>
//         </Animatable.View>
//       </View>
//     );
//   }
// }
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#05375a",
//   },
//   header: {
//     flex: 1,
//     justifyContent: "flex-end",
//     paddingHorizontal: 20,
//     paddingBottom: 50,
//   },
//   footer: {
//     flex: 3,
//     backgroundColor: "white",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   textHeader: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   textFooter: {
//     color: "#05375a",
//     fontSize: 18,
//   },
//   action: {
//     flexDirection: "row",
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f2f2f2",
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     paddingLeft: 10,
//     color: "#05375a",
//   },
//   button: {
//     alignItems: "center",
//     marginTop: 50,
//   },
//   signIn: {
//     width: "100%",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   textPrivate: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 20,
//   },
//   color_textPrivate: {
//     color: "gray",
//   },
// });

import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            {/* onPress={() => {}} */}
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => alert("Button Clicked!")}
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: "#009387",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#009387",
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
