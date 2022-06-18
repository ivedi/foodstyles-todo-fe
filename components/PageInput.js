import React, { useState } from 'react';
import {
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';


export default function PageInput({
  placeholder,
  onChangeText,
  validate,
  secureTextEntry, }) {
  const borderColors = {
    focus: '#4a77e5',
    blur: '#e1e1e1',
    error: 'red',
  };
  const [borderColor, setBorderColor] = useState(borderColors.blur);
  const [hasError, setHasError] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  const handleFocus = () => {
    setBorderColor(borderColors.focus); 
    setHasFocus(true);
  }

  const handleBlur = () => {
    setBorderColor(hasError ? borderColors.error : borderColors.blur);
    setHasFocus(false);
  }

  const handleTextChange = (text) => {
    onChangeText(text);
    let isValid = validate(text);
    setHasError(!isValid);
    if (!isValid) {
      setBorderColor(borderColors.error);
    } else if (hasFocus) {
      setBorderColor(borderColors.focus);
    } else {
      setBorderColor(borderColors.blur);
    }
  }

  return (
    <>
    <CustomInput
      placeholder={placeholder}
      placeholderTextColor="#9ea3b2"
      borderColor={borderColor}
      secureTextEntry={secureTextEntry}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={handleTextChange} />
    </>
  );
}

const CustomInput = styled.TextInput`
  padding: 0.5rem 0 0.5rem 0;
  margin-bottom: 1.25rem;
  font-family: mark-pro-regular; 
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1f2a4b;
  border: 0;
  borderBottomWidth: 1px;
  borderBottomColor: ${(props) => props.borderColor};
  outlineWidth: 0;
`;
