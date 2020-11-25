// In App.js in a new project
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LandingPage from './components/LandingPage';
// import LoginPage from './components/LoginPage';
// import RootStack from './components/RootStack';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View>
//       <Text>
//         Hey
//       </Text>
//       <LandingPage onLoginClick={() => navigation.navigate("Login")} />
//     </View>
//   );
// }

// // const LoginPage = ({ navigation }) => {
// //   return (
// //     <View>
// //       <LoginPage />
// //     </View>
// //   );
// // }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //        <Stack.Screen name="Home" component={HomeScreen} />
//     //        <Stack.Screen name="Login" component={LoginPage }/>
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     // <NavigationContainer>
//     //   <Drawer.Navigator>
//     //     <Drawer.Screen name="Home" component={HomeScreen} />
//     //     <Drawer.Screen name="Root" component={LoginPage} />
//     //   </Drawer.Navigator>
//     // </NavigationContainer>
//     <RootStack/>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import { icons, COLORS, FONTS, SIZES } from "./constants";

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { DrawerContent } from "./components/DrawerContent";

import MainTabScreen from "./components/MainTabScreen";
import SupportScreen from "./components/SupportScreen";
import SettingsScreen from "./components/SettingScreen";
import BookmarkScreen from "./components/BookmarkScreen";

import { AuthContext } from "./components/context";

import RootStackScreen from "./components/RootStack";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      {/* <View style={styles.container}>
        // {isLoading ? (
        //   <View style={[styles.indicatorContainer, styles.horizontal]}>
        //     {/* <ActivityIndicator />
        //     <ActivityIndicator size="large" />
        //     <ActivityIndicator size="small" color="#0000ff" /> */}
      {/* //     <ActivityIndicator size="large" color="#00ff00" />
        //   </View> */}
      {/* // ) : ( */}
      <NavigationContainer theme={theme}>
        <AuthContext.Provider value={authContext}>
          {/* <RootStackScreen /> */}
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerStyle={{
              backgroundColor: "#339ba5",
              // width: 240,
            }}
          >
            <Drawer.Screen
              name="Travel Fantasies"
              component={MainTabScreen}
              options={{
                title: null,
                headerStyle: { backgroundColor: "#fff" },
              }}
            />
            <Drawer.Screen
              name="SupportScreen"
              component={SupportScreen}
              options={{
                title: null,
                headerStyle: { backgroundColor: "#fff" },
              }}
            />
            <Drawer.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={{
                headerLeft: ({ onPress }) => (
                  <TouchableOpacity
                    style={{ marginLeft: SIZES.padding }}
                    onPress={onPress}
                  >
                    <Image
                      source={icons.back}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                  </TouchableOpacity>
                ),
                 headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Menu")}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
              }}
            />
            <Drawer.Screen
              name="BookmarkScreen"
              component={BookmarkScreen}
              options={{
                title: null,
                headerStyle: { backgroundColor: "#fff" },
              }}
            />
          </Drawer.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
      {/* //   )}
      // </View> */}
      {/* <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </AuthContext.Provider> */}
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
