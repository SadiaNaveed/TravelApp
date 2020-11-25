import React, { useEffect, useState } from "react";
import { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import {
  View,
  Text,
  Image,
  Button,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import hotelService from "../../services/HotelService";
import { icons, COLORS, FONTS, SIZES } from "../../constants";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import base64 from "react-native-base64";

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

const SingleHotel = ({ hotel, onPress }) => {
  return (
    <View style={styles.box}>
      <Image
        style={{
          width: 150,
          height: 95,
          resizeMode: "cover",
          backgroundColor: "red",
          // position: "absolute",
          marginLeft: 10,
          borderRadius: 20,
          marginTop: 5,
        }}
        source={{
          uri:
            "data:image/jpeg;base64," +
            arrayBufferToBase64(hotel.Image.data.data),
        }}
      />
      <View style={{ position: "absolute", marginLeft: 170 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {hotel.HotelName}
        </Text>
        <Text>Location {hotel.Location}</Text>
        <Text> Ratings {hotel.Ratings}</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image
            source={require("../../assets/icons/right_arrow.png")}
            style={{ height: 40, width: 40, marginLeft: 90 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AllHotels = ({ navigation }) => {
  let [hotels, setHotels] = useState("");
  let [loading, setLoading] = useState(true);
  const { colors } = useTheme();

  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

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
  const handleValidUser = (val) => {
    setData({
      ...data,
      isValidUser: true,
    });
  };
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
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <View>
      <ScrollView>
        {/* <View
          style={{
            height: 150,
            backgroundColor: "blue",
            marginBottom: 30,
            // borderBottomLeftRadius: 40,
            // borderBottomRightRadius: 60,
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 60,
          }}
        >
        </View> */}

        <View>
          <LinearGradient
            style={[
              {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                height: 30,
                // backgroundColor: "red",
              },
            ]}
            colors={["#46aeff", "#5884ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text style={{ color: "black", fontSize: 20 }}>
              Find Best Hotels of Pakistan
            </Text>
          </LinearGradient>
        </View>

        <View style={styles.action}>
          <TextInput
            placeholder="Search Hotel"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            style={{ width: 350 }}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          <Feather
            name="search"
            color={colors.text}
            size={30}
            style={{ marginTop: 10 }}
          />
        </View>
        {/* <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Search Hotel"
          // icon={icons.search}
          value={value}
        /> */}
        {loading ? (
          <View style={[styles.indicatorContainer, styles.horizontal]}>
            {/* <ActivityIndicator size="large" color="#00ff00" /> */}
            <AnimatedLoader
              visible={visible}
              overlayColor="rgba(255,255,255,0.75)"
              source={require("./loader.json")}
              animationStyle={styles.lottie}
              speed={1}
            />
          </View>
        ) : (
          <View>
            {hotels.map((hotel, index) => (
              <SingleHotel
                key={index}
                hotel={hotel}
                onPress={() => navigation.navigate("HotelDetails")}
              />
            ))}
          </View>
        )}

        <Button
          title="Go to home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>

    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={hotels}
    //     renderItem={renderItem}
    //     keyExtractor={(hotels) => hotels._id}
    //   />
    // </SafeAreaView>
    // <Text>Hye</Text>
    // <View style={styles.container}>
    //   <ScrollView>
    //     {hotels.map((hotel) => (
    //       <View key={hotel._id}>
    //         <Text style={styles.item}>{hotel.HotelName}</Text>
    //       </View>
    //     ))}
    //   </ScrollView>
    // </View>
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
  //      justifyContent: "center",
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
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 5,
    borderWidth: 2,
    borderRadius: 30,
  },

  item: {
    backgroundColor: "pink",
    padding: 30,
    // marginVertical: 8,
    // marginHorizontal: 16,
    marginTop: 24,
    fontSize: 24,
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
  box: {
    height: 110,
    borderWidth: 1,
    borderColor: "gray",
    margin: 10,
    borderRadius: 30,
  },

  button: {
    // position: "absolute",
    height: 130,
    marginLeft: 40,
    width: 190,
    // backgroundColor: "blue",
    borderRadius: 20,
    // padding: 8,
    marginBottom: 20,
  },
});
