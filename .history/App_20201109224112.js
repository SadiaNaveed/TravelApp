import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Dimensions, Text, ScrollView, View, Button, Image } from 'react-native';
import LandingPage from "./components/LandingPage";
import LoginPage from './components/LoginPage';
// import { StackNavigator } from 'react-navigation';

const { width } = Dimensions.get("window");
const height = width * 0.7;
const images = [
   'https://images.pexels.com/photos/1792055/pexels-photo-1792055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/5168816/pexels-photo-5168816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   'https://images.pexels.com/photos/5487986/pexels-photo-5487986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   // 'https://images.pexels.com/photos/358532/pexels-photo-358532.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
// 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
]

export default class App extends Component {

   state = {
   active: 0
   }
   change = ({nativeEvent}) => {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== this.state.active) {
         this.setState({ active: slide });
   }
   }
   render()
 {
    return (
       <View style={styles.container}>
          <ScrollView
             pagingEnabled
             horizontal
             onScroll= {this.change}
             showsHorizontalScrollIndicator={false}
             style={styles.scroll}
          > 
          {
             images.map((image, index) => (
                <Image
                   key={index}
             source={{uri:image}}
             style={styles.image} />
             ))
             }
          </ScrollView>
          <View style={styles.pagination}>
             {
                images.map((i, k) => (
                   <Text key={k} style={k==this.state.active ? styles.pagingActiveText : styles.pagingText}> ⬤ </Text>
                ))
             }
             
          </View>

        </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 0,
      width,
      height
   },
   scroll: {
      width,
      height
   },
   image: {
      width,
      height,
      resizeMode: "cover"
   },
   pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center'
   },
   pagingText: {
      fontSize: (width / 20),
      color: "#888",
      margin: 3
   },
   pagingActiveText: {
      fontSize: (width / 20),
      color: "#fff",
      margin: 3
   }
});
