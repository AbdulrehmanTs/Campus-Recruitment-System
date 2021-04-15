import React from 'react'
// import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'



const Stack = createStackNavigator();

const AppStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
  )
}

export default AppStack;
