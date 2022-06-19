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
    <BouncyCheckbox
      isChecked={todo.isCompleted}
      size={16}
      fillColor="#4a77e5"
      textComponent={
        <>
          <CheckboxText>{todo.title}</CheckboxText>
          <TextButton
            text="x"
            textColor="#bfbfbf"
            width="auto"
            marginLeft="auto"
            fontSize="20px"/>
        </>
      }
      style={{
        width: '100%',
        marginBottom: '0.4rem',
      }}
      iconStyle={{
        borderColor: "#00000040",
        borderRadius: "4px",
      }}
    />
  );
}

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
