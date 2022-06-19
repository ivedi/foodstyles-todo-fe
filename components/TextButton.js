import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';


export default function TextButton({
  text,
  textColor,
  hasUnderline,
  onClick }) {
  return (
    <Container>
      <ClickableArea onPress={onClick}>
        <ButtonText
          color={textColor || '#1f2a4b'}
          underline={hasUnderline ? 'underline' : 'none' }>
          {text}
        </ButtonText>
      </ClickableArea>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 1.25rem;
`;

const ClickableArea = styled.TouchableOpacity`
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ButtonText = styled.Text`
  text-decoration: ${(props) => props.underline};
  text-decoration-color: ${(props) => props.color};
  font-family: mark-pro-regular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color};
  width: auto;
`;
