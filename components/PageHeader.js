import React from 'react';
import {
  Text,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import CheckIcon from './icons/CheckIcon';


export default function PageHeader({ title, subtitle }) {
  let subtitleComponent;
  if (subtitle) {
    subtitleComponent = <Subtitle>{subtitle}</Subtitle>;
  }

  return (
    <>
      <CheckIcon />
      <Title>{title}</Title>
      {subtitleComponent}
    </>
  );
}

const Title = styled.Text`
  width: 100%;
  font-family: mark-pro-regular;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1f2a4b;
  margin: 25px 168px 6px 0;
`;

const Subtitle = styled.Text`
  width: 100%;
  margin: 6px 186px 43px 0;
  font-family: mark-pro-regular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #a1a4ad;
`;
