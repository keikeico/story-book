import React from "react";
import { View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Text } from "@keikei/kk-ui-kit";
import Entypo from "react-native-vector-icons/Entypo";

const AddressCard = ({ address }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={[styles.row, styles.justifyContentBetween]}>
          <View style={[styles.row, styles.justifyContentBetween]}>
            <Entypo
              style={{ marginRight: 5 }}
              name="location-pin"
              size={14}
              color="red"
            />
            <Text text={address?.alias}></Text>
          </View>
          <TouchableOpacity>
            <Text color="#1d46b8" text="Düzenle"></Text>
          </TouchableOpacity>
        </View>
        <Text text={address?.name}></Text>
        <Text text={address?.phoneNumber}></Text>
        <Text text={address?.address}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "rgba(232,238,244,0.5)",
  },
  cardContainer: {
    width: "100%",
    height: Dimensions.get("screen").height / 5,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    height: Dimensions.get("screen").height / 6,
    padding: "5%",
    justifyContent: "space-around",
  },
});

export { AddressCard };
