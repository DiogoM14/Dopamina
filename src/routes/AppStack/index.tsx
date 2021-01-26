import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../../pages/Landing'
import AddTodo from '../../pages/AddTodo'

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="AddTodo" component={AddTodo} />
      </Navigator>
    </NavigationContainer>
    )
  }
  
  export default AppStack
  