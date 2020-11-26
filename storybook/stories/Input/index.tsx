import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';

interface InputProps {
  placeholder?: string;
  fontSize?: number;
}

function Input({ fontSize, placeholder }: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.container, { fontSize: fontSize }]}></TextInput>
  );
}
export default Input;
