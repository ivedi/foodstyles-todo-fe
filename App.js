import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import Apploading from 'expo-app-loading';
import useFonts from './hooks/useFonts';
import PageContainer from './components/PageContainer';
import PageHeader from './components/PageHeader';
import Input from './components/Input';

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


  const handleInput = (value) => {
    return !!value;
  };

  return (
    <AppContainer>
      <StatusBar style="auto" />
      <PageContainer>
        <PageHeader title="Welcome back!" subtitle="Log in to continue." />
        <Input placeholder="Username" validate={handleInput} onChangeText={() => {}} />
      </PageContainer>
    </AppContainer>
  );

}

const AppContainer = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: center;
  background-color: #f6f7f8;
`;
  
