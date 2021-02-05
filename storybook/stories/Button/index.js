import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
  size,
  label,
  bgColor,
  style,
  textColor,
  onPress,
  children,
  width,
  height,
  labelStyle,
  ...TouchableOpacityProps
}) => {
  return (
    <TouchableOpacity
      {...TouchableOpacityProps}
      onPress={onPress}
      style={[
        style,
        {
          backgroundColor: bgColor ? bgColor : "#8d8eb9",
          width: style ? (style.width ? style.width : 160) : 160,
          height: style ? (style.height ? style.height : 40) : 40,
          borderRadius: style
            ? style.borderRadius
              ? style.borderRadius
              : 25
            : 25,
        },
        styles.button,
      ]}
    >
      {label && (
        <Text
          style={[
            labelStyle,
            {
              color: textColor ? textColor : "#fff",
              fontSize: size ? size : 12,
            },
          ]}
        >
          {label}
        </Text>
      )}
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Button };
