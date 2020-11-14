// import React, { Component } from 'react';
// import Slider from "./Slider";
// import { AppRegistry, StyleSheet, Dimensions, Text, ScrollView, View, Button, Image } from 'react-native';

// const images = [
//    'https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//    'https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//    'https://images.pexels.com/photos/5487986/pexels-photo-5487986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
// 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
//    // 'https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
// // 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
// ]

// export default class LandingPage extends Component {

//    render()
//  {
//     return (
//        <View style={styles.container}>
//           <Slider images={images} />
//           <Button title="login" onPress={this.props.onLoginClick}
//              />
//         </View>
//     );
//  }
// }

// const styles = StyleSheet.create({
//   container: {
//       marginTop: 0
//    },

// });

import React from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import Slider from "./Slider";

const images = [
  "https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/5487986/pexels-photo-5487986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  // 'https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
];

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Slider images={images} />
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
