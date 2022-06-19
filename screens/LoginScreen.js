import React from 'react';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import PageInput from '../components/PageInput';
import NavLink from '../components/NavLink';


export default function LoginScreen({ navigation }) {
  const validateEmail = (text) => !!text;
  const validatePassword = (text) => !!text;

  const goToSignup = () => {
    navigation.navigate('Signup');
  }

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
            <NavLink
              title="Don't have an account? Sign up."
              navigate={goToSignup} />
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
