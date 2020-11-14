// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <LandingPage onLoginClick={() => navigation.navigate("Login")} />
    </View>
  );
}

// const LoginPage = ({ navigation }) => {
//   return (
//     <View>
//       <LoginPage />
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Login" component={LoginPage }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;