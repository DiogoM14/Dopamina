import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Landing from '../../pages/Landing'
import AddTodo from '../../pages/AddTodo'

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  const navigatorOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: '#111111' },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
}
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={navigatorOptions}
        mode="modal"
      >
        <Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Screen 
          name="Register" 
          component={Register}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: '#',
            },
            headerTintColor: '#e1e1e1'
          }}
        />
        <Screen 
          name="Landing" 
          component={Landing}
          options={{
            headerShown: false
          }}
        />
        <Screen 
          name="AddTodo" 
          component={AddTodo}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: '#111111',
            },
            headerTintColor: '#e1e1e1'
          }}
        />
      </Navigator>
    </NavigationContainer>
    )
  }
  
  export default AppStack
  