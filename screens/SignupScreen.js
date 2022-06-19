import React from 'react';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import PageInput from '../components/PageInput';
import TextButton from '../components/TextButton';
import PageButton from '../components/PageButton';

export default function SignupScreen() {
  const validateFullname = (text) => !!text;
  const validateEmail = (text) => !!text;
  const validatePassword = (text) => !!text;

  const goToLogin = () => {
    navigation.navigate('Login');
  }

  const signup = () => {
    console.log('Sign up clicked!');
  }

  return (
    <SafeContainer>
      <ScrollContainer>
        <PageWrapper>
          <PageContainer>
            <PageHeader
              title="Welcome!"
              subtitle="Sign up to start using Simpledo today." />
            <PageInput
              placeholder="Full Name"
              validate={validateFullname}
              onChangeText={() => {}} />
            <PageInput
              placeholder="Email"
              validate={validateEmail}
              onChangeText={() => {}} />
            <PageInput
              placeholder="Password"
              validate={validatePassword}
              onChangeText={() => {}}
              secureTextEntry={true} />
            <TextButton
              text="Do have an account? Sign in."
              hasUnderline={true}
              onClick={goToLogin} />
            <PageButton
              title="Sign Up"
              onClick={signup} />
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
