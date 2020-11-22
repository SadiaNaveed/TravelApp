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
import { useTheme } from "@react-navigation/native";
import Slider from "./Slider";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
//images
import { icons, COLORS, FONTS, SIZES } from "../constants";

const images = [
  "https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/5487986/pexels-photo-5487986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  // 'https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
];

const OptionItem = ({ bgColor, icon, label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <View style={[styles.shadow, { width: 60, height: 60 }]}>
        <LinearGradient
          style={[
            {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              backgroundColor: "red",
            },
          ]}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30,
            }}
          />
        </LinearGradient>
      </View>
      <Text
        style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      {/* <Text style={{ color: colors.text }}>Home Screen</Text> */}
      <Slider images={images} />

      {/* <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      /> */}
      {/* <View style={{ flex: 1, justifyContent: "center" }}> */}
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.base,
        }}
      >
        <OptionItem
          icon={icons.airplane}
          bgColor={["#46aeff", "#5884ff"]}
          label="Tours"
          onPress={() => {
            console.log("Flight");
          }}
        />
        <OptionItem
          icon={icons.bed}
          bgColor={["#fddf90", "#fcda13"]}
          label="Hotels"
          onPress={() => navigation.navigate("Details")}
        />
        <OptionItem
          icon={icons.blog}
          bgColor={["#e973ad", "#da5df2"]}
          label="BLOGS"
          onPress={() => {
            console.log("Bus");
          }}
        />
        <OptionItem
          icon={icons.about}
          bgColor={["#fcaba8", "#fe6bba"]}
          label="About Us"
          onPress={() => {
            console.log("Taxi");
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Places To Visit In Pakistan
        </Text>
        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderDestinations(item, index)}
        /> */}
      </View>
    </View>
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
