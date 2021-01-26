import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../../pages/Login'
import Landing from '../../pages/Landing'
import AddTodo from '../../pages/AddTodo'

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false
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
  