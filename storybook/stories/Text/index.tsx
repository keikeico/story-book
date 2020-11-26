import React from 'react';
import { Text } from 'react-native';
import styles from './style';

interface TextProps {
  text: string;
  fontSize?: number;
}

function TextComponent({ fontSize, text }: TextProps) {
  return (
    <Text
      style={[
        styles.container,
        {
          fontSize: fontSize,
        },
      ]}>
      {text}
    </Text>
  );
}
export default TextComponent;
