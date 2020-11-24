import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './style';

interface ImageBackgroundCardProps {
  text?: string;
  style?: object;
  imageURL?: string;
}

function ImageBackgroundCard({
  style,
  text,
  imageURL,
}: ImageBackgroundCardProps) {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        style={styles.image}
        source={{ uri: imageURL }}></ImageBackground>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{text + ' >'}</Text>
      </View>
    </View>
  );
}
export default ImageBackgroundCard;
