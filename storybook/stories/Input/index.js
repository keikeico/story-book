import React from "react";
import { View, TextInput, Dimensions, StyleSheet } from "react-native";
import { Text } from "@keikei/kk-ui-kit";
import Entypo from "react-native-vector-icons/Entypo";

const Input = ({
  size,
  color,
  style,
  overlay,
  placeholder,
  password,
  onType,
  valid,
  containerStyle,
  ...TextInputProps
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        onChangeText={(val) => {
          onType(val);
        }}
        secureTextEntry={password}
        placeholder={placeholder}
        style={[
          {
            fontSize: size ? size : 12,
            color: color ? color : "black",

            borderColor: valid ? "#00cda1" : "#98aabc",
          },
          style,
          styles.input,
        ]}
        {...TextInputProps}
      ></TextInput>
      {overlay && (
        <View pointerEvents="none" style={styles.overlay}>
          <View style={styles.textRow}>
            <Text color="#8298b4" text={placeholder}></Text>
          </View>
          {valid && (
            <View style={styles.iconRow}>
              <Entypo color="#00cda1" name="check"></Entypo>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: Dimensions.get("screen").height / 12,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    padding: 10,
    width: "100%",
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    padding: 10,
  },
  iconRow: {
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "flex-start",
    height: "50%",
  },
  textRow: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "50%",
  },
});

export { Input };
