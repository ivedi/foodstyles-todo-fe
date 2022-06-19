import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';


export default function PageButton({ title, onClick }) {
  return (
    <Container>
      <ClickableArea onPress={onClick}>
        <ButtonText>{title}</ButtonText>
      </ClickableArea>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1.25rem;
`;

const ClickableArea = styled.TouchableOpacity`
  width: 100%;
  padding: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  background-color: #4a77e5;
  border: 1px solid #4a77e5;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  font-family: mark-pro-regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  width: auto;
`;
