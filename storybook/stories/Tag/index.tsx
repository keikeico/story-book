import React from 'react';
import { Text } from 'react-native';
interface TagProps {
  title?: string;
}

function Tag({ title = 'My title' }: TagProps) {
  return <Text>Hello {title}</Text>;
}
export default Tag;
