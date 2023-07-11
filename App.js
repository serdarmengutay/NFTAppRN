import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from './src/views/screens/OnboardingScreen'
import HomeScreen from './src/views/screens/HomeScreen'
import DetailsScreen from './src/views/screens/DetailsScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='OnboardingScreen' component={OnboardingScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;