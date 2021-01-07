import * as React from "react";
import { StyleSheet } from "react-native";
import { Text as TextComponent } from "react-native";

const Text = ({ size, text, color, style, font, ...TextProps }) => {
  return (
    <TextComponent
      {...TextProps}
      style={[
        {
          fontSize: size ? size : 12,
          color: color ? color : "#000",
          fontFamily: font ? font : undefined,
        },
        style,
        styles.text,
      ]}
    >
      {text}
    </TextComponent>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export { Text };
