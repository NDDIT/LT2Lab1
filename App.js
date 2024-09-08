import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Exercise1Screen from './screens/Exercise1Screen';
import Exercise2Screen from './screens/Exercise2Screen';
import Exercise3Screen from './screens/Exercise3Screen';
import Exercise4Screen from './screens/Exercise4Screen';
import Exercise5Screen from './screens/Exercise5Screen';
import Exercise6Screen from './screens/Exercise6Screen';
import Exercise7Screen from './screens/Exercise7Screen';
import Exercise8Screen from './screens/Exercise8Screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exercise1" component={Exercise1Screen} />
        <Stack.Screen name="Exercise2" component={Exercise2Screen} />
        <Stack.Screen name="Exercise3" component={Exercise3Screen} />
        <Stack.Screen name="Exercise4" component={Exercise4Screen} />
        <Stack.Screen name="Exercise5" component={Exercise5Screen} />
        <Stack.Screen name="Exercise6" component={Exercise6Screen} />
        <Stack.Screen name="Exercise7" component={Exercise7Screen} />
        <Stack.Screen name="Exercise8" component={Exercise8Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
