import React from 'react';
import {
  View,
  CheckBox,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import TextButton from './TextButton';


export default function TodoItem({ todo }) {
  return (
    <Container>
      <BouncyCheckbox
        size={16}
        fillColor="#4a77e5"
        textComponent={
          <CheckboxText>{todo.title}</CheckboxText>
        }
        iconStyle={{
          borderColor: "#00000040",
          borderRadius: "4px",
        }}
      />
      <TextButton
        text="x"
        textColor="#bfbfbf"
        width="auto"
        marginLeft="auto"
        fontSize="20px"/>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  margin-bottom: 0.2rem;
`;

const CheckboxText = styled.Text`
  font-family: mark-pro-regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: -0.2rem;
`;
