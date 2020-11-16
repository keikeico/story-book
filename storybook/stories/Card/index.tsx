import React from 'react';
import { View } from 'react-native';
import styles from './style';

interface CardProps {
  size?: number;
}

function Card({ size }: CardProps) {
  return (
    <View
      style={[
        styles.container,
        {
          height: size,
          width: size,
        },
      ]}></View>
  );
}
export default Card;
