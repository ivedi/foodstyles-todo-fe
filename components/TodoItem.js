import React from 'react';
import {
  View,
  CheckBox,
  Text,
} from 'react-native';
import styled from 'styled-components/native';


export default function TodoItem() {
  return (
    <Container>
      <CheckBox />
      <Text>This is todo item</Text>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
`;
