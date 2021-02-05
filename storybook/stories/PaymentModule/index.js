import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { Button, Input, Text } from "@keikei/kk-ui-kit";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const PaymentModule = ({ font, installment }) => {
  const [secondCardOpen, setSecondCardOpen] = useState(false);
  const [firstCardInput, setFirstCardInput] = useState(false);
  const [secondCardInput, setSecondCardInput] = useState(false);

  const [installmentNumber, setInstallment] = useState(1);
  const [paymentType, setPaymentType] = useState("cc");

  return (
    <View
      style={[
        styles.addressCardInner,
        {
          height:
            firstCardInput && secondCardOpen && secondCardInput
              ? 822
              : !firstCardInput && secondCardOpen && !secondCardInput
              ? 462
              : (!firstCardInput && secondCardOpen && secondCardInput) ||
                (firstCardInput && !secondCardOpen)
              ? 670
              : firstCardInput && secondCardOpen && !secondCardInput
              ? 570
              : 472,
        },
      ]}
    >
      <View
        style={{
          width: "100%",
          height: 93,
        }}
      >
        <View
          style={[
            {
              alignSelf: "flex-start",
              flexDirection: "row",
              height: 49,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Text
            style={{ paddingLeft: 20 }}
            font={font ? font : undefined}
            size={18}
            text="PAYMENT TYPE"
          ></Text>
        </View>
        <View
          style={{
            height: 44,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              borderBottomWidth: 1,
              borderColor: "#dae2e9",
              flexGrow: 1,
            }}
          >
            <Button
              onPress={() => {
                setPaymentType("cc");
              }}
              textColor="black"
              style={[
                paymentType == "cc"
                  ? styles.methodButtonSelected
                  : styles.methodButtonUnselected,
              ]}
              bgColor="transparent"
              label="CREDIT CARD"
            ></Button>
            <Button
              onPress={() => {
                setPaymentType("western");
              }}
              style={[
                paymentType == "western"
                  ? styles.methodButtonSelected
                  : styles.methodButtonUnselected,
              ]}
              bgColor="transparent"
              textColor="black"
              label="WESTERN UNION"
            ></Button>
            <Button
              onPress={() => {
                setPaymentType("cash");
              }}
              style={[
                paymentType == "cash"
                  ? styles.methodButtonSelected
                  : styles.methodButtonUnselected,
              ]}
              bgColor="transparent"
              textColor="black"
              label="CASH"
            ></Button>
            <Button
              onPress={() => {
                setPaymentType("courier");
              }}
              style={[
                paymentType == "courier"
                  ? styles.methodButtonSelected
                  : styles.methodButtonUnselected,
              ]}
              bgColor="transparent"
              textColor="black"
              label="WITH COURIER COMPANY"
            ></Button>
          </ScrollView>
        </View>
      </View>
      {paymentType == "cc" ? (
        <View style={styles.card}>
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: 20,
              height: 60,
              justifyContent: "center",
            }}
          >
            <Button
              onPress={() => {
                setFirstCardInput(!firstCardInput);
              }}
              font={font ? font : undefined}
              bgColor="transparent"
              textColor="#00b4b5"
              label={
                firstCardInput
                  ? "Pay with Registered Card"
                  : "Pay with Another Card"
              }
            ></Button>
          </View>
          {!firstCardInput ? (
            <View style={styles.dropdownWrapper}>
              <View style={[styles.dropdown, { width: "90%" }]}>
                <Text
                  color="#000"
                  font={font ? font : undefined}
                  text="Garanti Bonus"
                ></Text>
                <FontAwesome
                  style={{ marginLeft: 15 }}
                  name="angle-down"
                  size={20}
                  color="#000"
                />
              </View>
            </View>
          ) : (
            <View
              style={[
                {
                  justifyContent: "space-between",
                  width: "100%",
                },
              ]}
            >
              <View
                style={[
                  styles.card,
                  {
                    borderBottomWidth: secondCardOpen ? 1 : 0,
                    borderColor: "#dae2e9",
                  },
                ]}
              >
                <View
                  style={[
                    {
                      justifyContent: "flex-start",
                      width: "90%",
                      alignSelf: "center",
                    },
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
                <View style={styles.save}>
                  <TouchableOpacity style={[styles.circle]}>
                    <Feather name="check" size={15} color="#00cda1" />
                  </TouchableOpacity>
                  <Text
                    style={{ marginLeft: 10 }}
                    text="Kart bilgilerini kaydet"
                  ></Text>
                </View>
              </View>
            </View>
          )}
          {!secondCardOpen && (
            <View
              style={[
                styles.row,
                {
                  alignItems: "center",
                  height: 101,
                  alignSelf: "flex-start",
                  marginLeft: 23,
                },
              ]}
            >
              <MaterialCommunityIcons
                style={{ marginRight: 10 }}
                name="lightbulb-on-outline"
                size={30}
                color="yellow"
              />
              <View>
                <Text text="Do you know that you can pay with 2 credit cards?"></Text>
                <TouchableOpacity
                  onPress={() => {
                    setSecondCardOpen(true);
                  }}
                >
                  <Text
                    color="#00b4b5"
                    text="Enter your second credit card information"
                  ></Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {secondCardOpen && (
            <View style={[styles.card]}>
              <View
                style={{
                  width: "100%",
                  alignItems: "flex-end",
                  paddingHorizontal: "10%",
                }}
              >
                <Button
                  onPress={() => {
                    setSecondCardInput(!secondCardInput);
                  }}
                  font={font ? font : undefined}
                  bgColor="transparent"
                  textColor="#1d46b8"
                  label={
                    setSecondCardInput
                      ? "Kayıtlı Kartımla Öde"
                      : "Başka Kartla Öde"
                  }
                ></Button>
              </View>
              {!secondCardInput ? (
                <View style={styles.dropdownWrapper}>
                  <View style={[styles.dropdown, { width: "90%" }]}>
                    <Text
                      color="#000"
                      font={font ? font : undefined}
                      text="Garanti Bonus"
                    ></Text>
                    <FontAwesome
                      style={{ marginLeft: 15 }}
                      name="angle-down"
                      size={20}
                      color="#000"
                    />
                  </View>
                </View>
              ) : (
                <View
                  style={[
                    {
                      justifyContent: "space-between",
                      width: "100%",
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.card,
                      {
                        borderBottomWidth: secondCardOpen ? 1 : 0,
                        borderColor: "#dae2e9",
                      },
                    ]}
                  >
                    <View
                      style={[
                        {
                          justifyContent: "flex-start",
                          width: "90%",
                          alignSelf: "center",
                        },
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
                    <View
                      style={[
                        {
                          justifyContent: "flex-start",
                          width: "90%",
                          alignSelf: "center",
                        },
                      ]}
                    >
                      <Text
                        color="#8298b4"
                        text="Bu Kartla Ödenecek Tutar"
                      ></Text>
                      <TextInput
                        keyboardType="number-pad"
                        style={styles.inputContainer}
                      ></TextInput>
                    </View>
                    <View style={styles.save}>
                      <TouchableOpacity style={[styles.circle]}>
                        <Feather name="check" size={15} color="#00cda1" />
                      </TouchableOpacity>
                      <Text
                        style={{ marginLeft: 10 }}
                        text="Kart bilgilerini kaydet"
                      ></Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
          <View
            style={[
              styles.addressCard,
              {
                width: "100%",
                paddingHorizontal: 20,
                height: 170,
                justifyContent: "space-around",
              },
            ]}
          >
            <View style={styles.item}>
              <Text
                font={font ? font : undefined}
                size={18}
                text="Installment options"
              ></Text>
            </View>
            <View style={styles.item}>
              <View
                style={[
                  {
                    justifyContent: "space-between",
                  },
                  styles.row,
                ]}
              >
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => {
                      setInstallment(1);
                    }}
                    style={[styles.circle, styles.center]}
                  >
                    {installmentNumber === 1 && (
                      <AntDesignIcon size={12} color="#00b4b5" name="check" />
                    )}
                  </TouchableOpacity>
                  <Text
                    font={font ? font : undefined}
                    style={{ marginLeft: 15 }}
                    text="Single shot"
                  ></Text>
                </View>

                <Text
                  font={font ? font : undefined}
                  style={{ marginLeft: 15 }}
                  text="297 $ "
                ></Text>
              </View>
            </View>
            <View style={styles.item}>
              <View
                style={[
                  {
                    justifyContent: "space-between",
                  },
                  styles.row,
                ]}
              >
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => {
                      setInstallment(2);
                    }}
                    style={[styles.circle, styles.center]}
                  >
                    {installmentNumber === 2 && (
                      <AntDesignIcon size={13} color="#00b4b5" name="check" />
                    )}
                  </TouchableOpacity>
                  <Text
                    font={font ? font : undefined}
                    style={{ marginLeft: 15 }}
                    text="2 installments"
                  ></Text>
                </View>
                <Text
                  font={font ? font : undefined}
                  style={{ marginLeft: 15 }}
                  text="148,5  $"
                ></Text>
              </View>
            </View>
            <View style={styles.item}>
              <View
                style={[
                  {
                    justifyContent: "space-between",
                  },
                  styles.row,
                ]}
              >
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => {
                      setInstallment(3);
                      installment(3);
                    }}
                    style={[styles.circle, styles.center]}
                  >
                    {installmentNumber === 3 && (
                      <AntDesignIcon size={13} color="#00b4b5" name="check" />
                    )}
                  </TouchableOpacity>
                  <Text
                    font={font ? font : undefined}
                    style={{ marginLeft: 15 }}
                    text="3 installments"
                  ></Text>
                </View>

                <Text
                  font={font ? font : undefined}
                  style={{ marginLeft: 15 }}
                  text="148,5  $ "
                ></Text>
              </View>
            </View>
          </View>
        </View>
      ) : paymentType == "western" ? (
        <View></View>
      ) : paymentType == "courier" ? (
        <View style={{ height: 362, width: "100%" }}>
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "center",
              height: 54,
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ paddingRight: 20 }}
                color="#00b4b5"
                size={12}
                font={font ? font : undefined}
                text="Add / Edit"
              ></Text>
            </TouchableOpacity>
          </View>

          <Input
            containerStyle={{ width: "80%", alignSelf: "center" }}
            placeholder="Name, Surname"
          ></Input>
          <Input
            containerStyle={{ width: "80%", alignSelf: "center" }}
            placeholder="GSM Phone"
          ></Input>
          <Input
            containerStyle={{ width: "80%", alignSelf: "center" }}
            placeholder="Neighborhood / street / building"
          ></Input>
          <Input
            containerStyle={{ width: "80%", alignSelf: "center" }}
            placeholder="Order Note"
          ></Input>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  addressCardInner: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
  },
  methodButtonSelected: {
    borderRadius: 3,
    borderColor: "black",
    borderBottomWidth: 4,
    width: 112,
  },
  methodButtonUnselected: {
    width: 112,
  },
  container: {
    backgroundColor: "#e8eef4",
  },
  card: {
    width: "100%",
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
  dropdown: {
    width: "100%",
    height: 34,
    borderRadius: 4,
    backgroundColor: "rgba(238,241,244,0.5)",
    alignSelf: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 34,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#00cda1",
    justifyContent: "center",
    alignItems: "center",
  },
  save: {
    justifyContent: "flex-start",
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export { PaymentModule };
