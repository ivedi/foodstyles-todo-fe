import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';


export default function NavLink({ title, navigate }) {
  return (
    <Container>
      <ClickableArea onPress={navigate}>
        <ButtonText>{title}</ButtonText>
      </ClickableArea>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ClickableArea = styled.TouchableOpacity`
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ButtonText = styled.Text`
  text-decoration: underline;
  font-family: mark-pro-regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1f2a4b;
  width: auto;
`;
