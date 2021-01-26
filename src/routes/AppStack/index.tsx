import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../../pages/Landing'
import AddTodo from '../../pages/AddTodo'

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

  return (
    <NavigationContainer>
      <Navigator>
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
  