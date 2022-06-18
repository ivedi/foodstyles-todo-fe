import React from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import PageInput from '../components/PageInput';


export default function LoginScreen() {
  const validateEmail = (text) => !!text;
  const validatePassword = (text) => !!text;

  return (
    <SafeContainer>
      <ScrollContainer>
        <PageWrapper>
          <PageContainer>
            <PageHeader title="Welcome back!" subtitle="Log in to continue." />
            <PageInput
              placeholder="Email"
              validate={validateEmail}
              onChangeText={() => {}} />
            <PageInput
              placeholder="Password"
              validate={validatePassword}
              onChangeText={() => {}}
              secureTextEntry={true} />
          </PageContainer>
        </PageWrapper>
      </ScrollContainer>
    </SafeContainer>
  );
}


const SafeContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
`;

const PageWrapper = styled.View`
  height: 100vh;
  alignItems: center;
  justifyContent: center;
`;


const Temp = styled.Text`
  font-size: 50px;
`;
