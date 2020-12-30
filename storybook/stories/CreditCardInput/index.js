import React from "react";
import { View, TextInput, Dimensions, StyleSheet } from "react-native";
import { Text } from "@keikei/text";

const CreditCardInput = () => {
  return (
    <View style={styles.card}>
      <View
        style={[
          { justifyContent: "flex-start", width: "90%", alignSelf: "center" },
        ]}
      >
        <Text color="#8298b4" text="Kart Numarası"></Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.inputContainer}
        ></TextInput>
      </View>

      <View style={[styles.row]}>
        <View style={styles.littleInput}>
          <Text color="#8298b4" text="Son Kullanma Tarihi"></Text>
          <View style={[styles.row, styles.fullWidth]}>
            <TextInput
              maxLength={2}
              keyboardType="number-pad"
              placeholder="Ay"
              placeholderTextColor="black"
              style={[styles.inputContainer, { width: "30%" }]}
            ></TextInput>
            <TextInput
              maxLength={2}
              keyboardType="number-pad"
              placeholderTextColor="black"
              placeholder="Yıl"
              style={[
                styles.inputContainer,
                { width: "30%", marginLeft: "5%" },
              ]}
            ></TextInput>
          </View>
        </View>

        <View style={[styles.littleInput, { width: "30%" }]}>
          <Text color="#8298b4" text="CVV"></Text>
          <TextInput
            maxLength={4}
            keyboardType="number-pad"
            style={[styles.inputContainer, { width: "100%" }]}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8eef4",
  },
  card: {
    width: "100%",
    height: Dimensions.get("screen").height / 5,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    height: 36,
    borderRadius: 4,
    backgroundColor: "rgba(238,241,244,0.5)",
    marginVertical: "5%",
    paddingHorizontal: "5%",
  },
  littleInput: {
    justifyContent: "space-between",
    width: "70%",
    alignSelf: "center",
    paddingHorizontal: "5%",
  },
  row: {
    flexDirection: "row",
  },
  fullWidth: {
    width: "100%",
  },
});

export { CreditCardInput };
