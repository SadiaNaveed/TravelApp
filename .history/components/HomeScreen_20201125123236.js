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

import React, { useEffect, useState } from "react";
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
import { icons, COLORS, FONTS, SIZES, images } from "../constants";
import hotelService from "../services/HotelService";
import { FlatList } from "react-native-gesture-handler";
import base64 from "react-native-base64";

const coverImages = [
  "https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/5487986/pexels-photo-5487986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  // 'https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
];
arrayBufferToBase64 = (buffer) => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  // return window.btoa(binary);
  return base64.encode(binary);
};
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
  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: "Ski Villa",
      img: images.skiVilla,
    },
    {
      id: 1,
      name: "Climbing Hills",
      img: images.climbingHills,
    },
    {
      id: 2,
      name: "Frozen Hills",
      img: images.frozenHills,
    },
    {
      id: 3,
      name: "Beach",
      img: images.beach,
    },
  ]);
  function renderDestinations(item, index) {
    var destinationStyle = {};

    if (index == 0) {
      destinationStyle = { marginLeft: SIZES.padding };
    }

    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
      >
        <Image
          source={{
            uri:
              "data:image/jpeg;base64," +
              arrayBufferToBase64(item.Image.data.data), //data.data in your case
          }}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.28,
            height: "82%",
            borderRadius: 15,
          }}
        />

        <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>
          {item.HotelName}
        </Text>
      </TouchableOpacity>
    );
  }

  //const { colors } = useTheme();
  let [hotels, setHotels] = useState("");

  useEffect(() => {
    hotelService
      .getThreeHotels()
      .then((data) => {
        setHotels(data);
        // setLoading(false);
        //alert("fetched");
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Slider images={coverImages} />
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.base,
        }}
      >
        <OptionItem
          icon={icons.bus}
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
      {/* Destination */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Destination
        </Text>

        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert("Left button pressed")}
          />
        </View>
        <FlatList
          //windowSize={4}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={hotels}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item, index }) => renderDestinations(item, index)}
          //initialNumToRender={3}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
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
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
