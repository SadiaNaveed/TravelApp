import React, { useEffect, useState } from "react";
import { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import hotelService from "../../services/HotelService";
import { icons, COLORS, FONTS, SIZES } from "../../constants";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

const arrayBufferToBase64 = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};



// const handleClick = () => {
//   <HotelBooking/>
// }
const SingleHote; = (props) => {
  //    onButtonClick = () => {
  //      this.props.history.push({
  //         pathname: '/HotelDetail',
  //        search: '?hotel=' + this.props.hotel._id,

  //      })

  //    }
  //    onBookingButtonClick = () => {
  //      this.props.history.push({
  //         pathname: '/HotelBooking',
  //        search: '?hotel=' + this.props.hotel._id,

  //      })

  //    }

  // const { hotel, history } = props;

  render();

  {
    const { hotel, history } = this.props;

    return (
      <Box
        p="10px"
        bgcolor="#F0FFF0"
        height="500px"
        mx="30px"
        borderRadius="6px"
        margin="10px"
        marginBottom="70px"
        border="1px solid"
        borderColor="#C0C0C0"
      >
        <img
          src={this.props.hotel.Image}
          style={{
            marginLeft: "10px",
            height: "300px",
            width: "310px",
            backgroundColor: grey[50],
          }}
          alt="hotel"
        />

        <Typography variant="h4">{this.props.hotel.HotelName}</Typography>
        <Typography variant="h5">
          Location {this.props.hotel.Location}
        </Typography>
        <Typography variant="h6">Ratings {this.props.hotel.Ratings}</Typography>
        {/* onClick={this.onButtonClick} */}

        <Button
          style={{
            backgroundColor: "#e7e7e7",
            color: "black",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          onClick={this.onButtonClick}
        >
          View Details
        </Button>
        <Button style={{ backgroundColor: "#008CBA" }}>View on Map</Button>
      </Box>
    );
  }
};
export default SingleHotel;

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#339ba5",
    paddingRight: "2rem",
    fontFamily: "Times New Roman",
    //   fontDisplay: "swap",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 700,
  },
}));