import React from "react";
import { Button } from "@keikei/kk-ui-kit";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "@keikei/kk-ui-kit";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { BasketButtons } from "@keikei/kk-ui-kit";

const BasketItem = ({ basket }) => {
  return (
    <View style={styles.card}>
      {basket?.note ? (
        <View
          style={[styles.noteContainer, styles.alignItemsCenter, styles.row]}
        >
          <Text text={basket.note}></Text>
        </View>
      ) : null}
      <View
        style={[
          styles.row,
          styles.fullWidth,
          { height: "50%", justifyContent: "space-around" },
        ]}
      >
        <View style={[styles.fullHeight, styles.center]}>
          <AntDesignIcon size={19} color={"#00cda1"} name="checkcircle" />
        </View>

        <View
          style={[
            {
              height: "100%",
              justifyContent: "flex-start",
              overflow: "hidden",
            },
          ]}
        >
          <Image
            resizeMode="stretch"
            source={{ uri: basket?.imageURL }}
            style={styles.imageColumn}
          ></Image>
        </View>
        <View style={[styles.justifyContentBetween, styles.fullHeight]}>
          <Text size={13} text={basket?.name}></Text>
          <Text text={"Stok Kodu: " + basket?.stockCode}></Text>
          <View>
            <Text color="#8298b4" text={"Beden		: " + basket?.size}></Text>
            <Text color="#8298b4" text={"Color		: " + basket?.color}></Text>
            <Text
              color="#8298b4"
              text={"Birim Fiyat	: " + basket?.unitPrice}
            ></Text>
          </View>
        </View>
        <View style={[styles.fullHeight]}>
          <Button
            children={
              <Ionicons
                style={{ marginRight: 15 }}
                name="trash-outline"
                size={20}
                color="black"
              />
            }
          ></Button>
        </View>
      </View>

      <View
        style={[
          styles.row,
          styles.justifyContentBetween,
          {
            width: "60%",
            alignSelf: "flex-end",
            paddingHorizontal: 10,
          },
        ]}
      >
        <BasketButtons initialAmount={basket?.amount}></BasketButtons>
        <View>
          <Text
            size={13}
            style={{
              textDecorationLine: "line-through",
            }}
            font="Avenir-Book"
            text={basket?.totalPrice}
          ></Text>
          <Text
            size={16}
            font="Avenir-Book"
            color="#e2801d"
            text={basket?.discountedPrice}
          ></Text>
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
    width: "90%",
    height: Dimensions.get("screen").height / 4,
    shadowColor: "rgba(40, 49, 59, 0.05)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    backgroundColor: "white",
    marginVertical: "5%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  littleCard: {
    width: "100%",
    height: Dimensions.get("screen").height / 12,
    shadowColor: "rgba(40, 49, 59, 0.05)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    backgroundColor: "white",
    marginVertical: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  imageColumn: {
    width: 100,
    height: "100%",
    borderRadius: 2,
  },
  buttonWrapper: {
    width: 100,
    height: 34,
  },
  borderStyle: {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dae2e9",
  },
  bottomOverlay: {
    width: "100%",
    height: 104,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(40, 49, 59, 0.13)",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  modalButton: {
    width: 160,
    height: 44,
    borderRadius: 22,
  },
  noteContainer: {
    width: "95%",
    height: 34,
    borderRadius: 4,
    backgroundColor: "#fbe4d8",
    paddingHorizontal: 5,
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
});

export { BasketItem };
