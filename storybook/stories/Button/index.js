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
          width: width ? width : 160,
          height: height ? height : 44,
        },
        styles.button,
      ]}
    >
      {label && (
        <Text
          style={{
            color: textColor ? textColor : "#fff",
            fontSize: size ? size : 12,
          }}
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
    borderRadius: 25,
  },
});

export { Button };
