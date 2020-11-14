import React from "react";
import { Button } from "react-native";

import Logo from "./images/logo.png";

const LandingPage = props => {
    return (
        <View style={styles.topContainer}>
          <Text style={styles.h1}>AlligatorChef</Text>
          <Text style={styles.h2}>
                Providing cajun bacon recipes since 1987.
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={Logo} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => props.onPress()}
            />
          </View>
        </View>
    );
};


export default LandingPage;