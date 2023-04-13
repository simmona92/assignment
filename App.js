import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Browse from './screens/Browse';
import Details from './screens/Details';
import Player from './screens/Player';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen 
          name="Browse" 
          component={Browse}
          options={{
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{
            headerTitleAlign: 'center'
          }}
          />
        <Stack.Screen 
          name="Player" 
          component={Player}
          options={{
            headerTitleAlign: 'center'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
