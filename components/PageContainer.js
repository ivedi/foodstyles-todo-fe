import React from 'react';
import {
  View,
} from 'react-native';
import styled from 'styled-components/native';


export default function PageContainer(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

const Container = styled.View`
  width: 390px;
  min-height: 5px;
  padding: 35px 30px 63px;
  border-radius: 8px;
  background-color: white;

  shadow-color: #000;
  shadow-offset: { width: 16, height: 0 };
  shadow-opacity: 0.1;
  shadow-radius: 16;
`;
