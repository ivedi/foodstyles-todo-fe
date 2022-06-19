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
  width: 25rem;
  min-height: 5px;
  padding: 2.5rem 1.8rem 3.8rem;
  border-radius: 8px;
  background-color: white;

  shadow-color: #000;
  shadow-offset: { width: 16, height: 0 };
  shadow-opacity: 0.1;
  shadow-radius: 16;
`;
