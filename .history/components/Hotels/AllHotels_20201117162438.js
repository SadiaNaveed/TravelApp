import React, { useEffect, useState } from "react";
import { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import { View, Text, Button, StyleSheet } from "react-native";
import hotelService from "../../services/HotelService";

const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

const AllHotels = ({ navigation }) => {
  let [hotels, setHotels] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    hotelService
      .getHotels()
      .then((data) => {
        setHotels(data);
        setLoading(false);
        //alert("fetched");
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    {
      isLoading ? (
          <View style = { [styles.indicatorContainer, styles.horizontal]} >
             <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="#0000ff" /> 
         <ActivityIndicator size="large" color="#00ff00" />
           </View>): ( <Text>Details Screen</Text>

      {hotels.map((hotel, index) => (
        <View key={index}>
          <Text>{hotel.HotelName}</Text>
        </View>
      ))}
      <Button
        title="Go to details screen...again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>)}
     
     
  );
};

export default AllHotels;

const HotelsStack = ({ navigation }) => (
  <HotelsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HotelsStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HotelsStack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
