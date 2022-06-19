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
      <Title bottomMargin={subtitle ? '0.4rem' : '1.5rem' }>{title}</Title>
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
  margin-top: 1.5rem;
  margin-bottom: ${(props) => props.bottomMargin};
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
