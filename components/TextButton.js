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
  fontSize,
  width,
  marginLeft,
  marginBottom,
  hasUnderline,
  onClick }) {
  return (
    <Container
      width={width || '100%'}
      marginBottom={marginBottom || '0'}
      marginLeft={marginLeft || '0'}>
      <ClickableArea onPress={onClick}>
        <ButtonText
          color={textColor || '#1f2a4b'}
          fontSize={fontSize || '14px' }
          underline={hasUnderline ? 'underline' : 'none' }>
          {text}
        </ButtonText>
      </ClickableArea>
    </Container>
  );
}

const Container = styled.View`
  width: ${(props) => props.width};
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
`;

const ClickableArea = styled.TouchableOpacity`
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ButtonText = styled.Text`
  text-decoration: ${(props) => props.underline};
  text-decoration-color: ${(props) => props.color};
  font-family: mark-pro-regular;
  font-size: ${(props) => props.fontSize};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.color};
  width: auto;
`;
