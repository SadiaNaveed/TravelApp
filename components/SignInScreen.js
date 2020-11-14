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

// export default class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       check_textInputChange: false,
//       password: "",
//       secureTextEntry: true,
//       // AnimationRef: 0,
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
//               style={styles.textInput}
//               onChangeText={(text) => this.textInputChange(text)}
//             />
//             {this.state.check_textInputChange ? (
//               <Animatable.View
//                 // ref={(ref) => (this.AnimationRef = ref)}
//                 animation="bounceIn"
//               >
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
//                 Style={styles.textInput}
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
//           <Text style={{ color: "#009bd1", marginTop: 15 }}>
//             Fogot password?
//           </Text>
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

//             <TouchableOpacity
//               onpress={() => this.props.navigation.navigate("SignUpScreen")}
//               style={[
//                 styles.signIn,
//                 {
//                   borderColor: "#4dc2f8",
//                   borderWidth: 1,
//                   marginTop: 15,
//                 },
//               ]}
//             >
//               <Text
//                 style={
//                   ([styles.textSign],
//                   {
//                     color: "#4dc2f8",
//                   })
//                 }
//               >
//                 sign Up
//               </Text>
//             </TouchableOpacity>
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
// });
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { useTheme } from "react-native-paper";

import { AuthContext } from "./context";

// import Users from "../model/users";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  // const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  // const loginHandle = (userName, password) => {
  //   const foundUser = Users.filter((item) => {
  //     return userName == item.username && password == item.password;
  //   });

  //   if (data.username.length == 0 || data.password.length == 0) {
  //     Alert.alert(
  //       "Wrong Input!",
  //       "Username or password field cannot be empty.",
  //       [{ text: "Okay" }]
  //     );
  //     return;
  //   }

  //   if (foundUser.length == 0) {
  //     Alert.alert("Invalid User!", "Username or password is incorrect.", [
  //       { text: "Okay" },
  //     ]);
  //     return;
  //   }
  //   signIn(foundUser);
  // };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        >
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
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
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            // onPress={() => {
            //   loginHandle(data.username, data.password);
            // }}
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
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

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
    flex: 3,
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
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
});
