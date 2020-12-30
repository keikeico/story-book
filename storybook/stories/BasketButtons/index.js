import React, { useState } from "react";
import { Button } from "@keikei/button";
import { View, StyleSheet } from "react-native";
import { Text } from "@keikei/text";
import FeatherIcon from "react-native-vector-icons/Feather";

const BasketButtons = ({ initialAmount, amount }) => {
  const [quantity, setQuantity] = useState(initialAmount);
  return (
    <View style={[styles.buttonWrapper, styles.row]}>
      <Button
        onPress={() => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
            amount(quantity - 1);
          }
        }}
        style={[
          {
            flex: 0.4,
            borderTopLeftRadius: 22,
            borderBottomLeftRadius: 22,
          },
          styles.borderStyle,
          styles.fullHeight,
        ]}
        children={<FeatherIcon name="minus" size={20} color="black" />}
      ></Button>
      <View
        style={[
          styles.borderStyle,
          styles.center,
          styles.fullHeight,
          { borderRadius: 0, flex: 0.4 },
        ]}
      >
        <Text size={14} color="#000" text={quantity}></Text>
      </View>
      <Button
        onPress={() => {
          setQuantity(quantity + 1);
          amount(quantity + 1);
        }}
        style={[
          {
            flex: 0.4,
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
          },
          styles.borderStyle,
          styles.fullHeight,
        ]}
        children={<FeatherIcon name="plus" size={20} color="black" />}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 100,
    height: 34,
  },
  row: {
    flexDirection: "row",
  },
  fullHeight: {
    height: "100%",
  },
  borderStyle: {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dae2e9",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export { BasketButtons };
