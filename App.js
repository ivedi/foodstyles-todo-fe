import React, { useState } from 'react';
import * as Font from 'expo-font';
import Apploading from 'expo-app-loading';
import useFonts from './hooks/useFonts';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      <Apploading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={e => { console.error(e); }}
      />
    );
  }


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
