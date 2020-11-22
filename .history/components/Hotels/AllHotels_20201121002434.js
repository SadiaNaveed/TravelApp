import React, { useEffect, useState } from "react";
import { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import hotelService from "../../services/HotelService";

const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};
// const Item = ({ HotelName }) => (

// );

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

  const renderItem = ({ hotels }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{hotels.HotelName}</Text>
    </View>
  );
  return (
    // <View>
    //   <ScrollView>
    //     <View
    //       style={{
    //         height: 150,
    //         backgroundColor: "blue",
    //         marginBottom: 30,
    //         borderBottomLeftRadius: 40,
    //         borderBottomRightRadius: 60,
    //         borderTopLeftRadius: 40,
    //         borderTopRightRadius: 60,
    //       }}
    //     >
    //       <Text style={{ color: "white", fontSize: 70 }}>Find Hotels</Text>
    //     </View>
    //     {loading ? (
    //       <View style={[styles.indicatorContainer, styles.horizontal]}>
    //         <ActivityIndicator size="large" color="#00ff00" />
    //       </View>
    //     ) : (
    //       <View>
    //         {hotels.map((hotel, index) => (
    //           <View key={index} style={styles.item}>
    //             <Text>{hotel.HotelName}</Text>
    //           </View>
    //         ))}

    //         <Button
    //           title="Go to home"
    //           onPress={() => navigation.navigate("Home")}
    //         />
    //         <Button title="Go back" onPress={() => navigation.goBack()} />
    //       </View>
    //     )}
    //   </ScrollView>
    // </View>

    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={hotels}
    //     renderItem={renderItem}
    //     keyExtractor={(hotels) => hotels._id}
    //   />
    // </SafeAreaView>
    <Text>Hye</Text>
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
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight || 0,
  // },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#eee",
  },
});
