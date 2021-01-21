import { StatusBar } from 'expo-status-bar';
import { AppLoading } from "expo";
import React from 'react';
import Landing from "./src/pages/Landing"

import { Ubuntu_400Regular, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular, 
    Ubuntu_700Bold,
  });
  
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    
    return (
      <>
      <StatusBar style="light" />
      <Landing />
      </>
      );
    }
  }
  
  