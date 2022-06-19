import React from 'react';
import {
  View,
  CheckBox,
  Text,
} from 'react-native';
import styled from 'styled-components/native';
import TextButton from './TextButton';


export default function TodoItem() {
  return (
    <Container>
      <CheckBox />
      <Text>This is todo item</Text>
      <DeleteContainer>
        <TextButton text="x" />
      </DeleteContainer>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
`;

const DeleteContainer = styled.View`
  margin-left: auto;
`;
