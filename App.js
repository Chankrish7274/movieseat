import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import CityList from './screens/CityList';
import MoviesList from './screens/MoviesList';
import Timings from './screens/Timings';
import PickSeats from './screens/PickSeats';
import TicketSuccess from './screens/TicketSuccess';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="City" component={CityList} />
        <Stack.Screen name="Movies" component={MoviesList} />
        <Stack.Screen name="Showtime" component={Timings} />
        <Stack.Screen name="Seats" component={PickSeats} />
        <Stack.Screen name="Confirmation" component={TicketSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
