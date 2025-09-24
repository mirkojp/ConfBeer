import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import MapScreen from './components/MapScreen';

// Stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ConfBeer 2025' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalles de la Conferencia' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Mapa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}