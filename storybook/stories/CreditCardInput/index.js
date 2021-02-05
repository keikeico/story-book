import React, { useState } from "react";
import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text } from "@keikei/kk-ui-kit";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button } from "@keikei/kk-ui-kit";
import Feather from "react-native-vector-icons/Feather";

const height = Dimensions.get("screen").height;


const CreditCardInput = () => {
  const [secondCardOpen, setSecondCardOpen] = useState(false);
  const [firstCardInput, setFirstCardInput] = useState(false);
  const [secondCardInput, setSecondCardInput] = useState(false);

  return (
    <View style={[styles.card]}>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          paddingHorizontal: "10%",
          height: height / 20,
        }}
      >
        <Button
          onPress={() => {
            setFirstCardInput(!firstCardInput);
          }}
          bgColor="transparent"
          textColor="#1d46b8"
          label={firstCardInput ? "Kayıtlı Kartımla Öde" : "Başka Kartla Öde"}
        ></Button>
      </View>
      {!firstCardInput ? (
        <View style={styles.dropdownWrapper}>
          <View style={[styles.dropdown, { width: "90%" }]}>
            <Text color="#000" text="Garanti Bonus"></Text>
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
              minHeight: height / 12,
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
        <View style={[styles.row, { alignItems: "center", height: "30%" }]}>
          <MaterialCommunityIcons
            style={{ marginRight: 10 }}
            name="lightbulb-on-outline"
            size={30}
            color="yellow"
          />
          <View>
            <Text text="2 kredi kartı ile ödeme yapabileceğinizi biliyor musunuz?"></Text>
            <TouchableOpacity
              onPress={() => {
                setSecondCardOpen(true);
              }}
            >
              <Text
                color="#1d46b8"
                text="İkinci kredi kartı bilgilerini gir"
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
              height: height / 20,
            }}
          >
            <Button
              onPress={() => {
                setSecondCardInput(!secondCardInput);
              }}
              bgColor="transparent"
              textColor="#1d46b8"
              label={
                setSecondCardInput ? "Kayıtlı Kartımla Öde" : "Başka Kartla Öde"
              }
            ></Button>
          </View>
          {!secondCardInput ? (
            <View style={styles.dropdownWrapper}>
              <View style={[styles.dropdown, { width: "90%" }]}>
                <Text color="#000" text="Garanti Bonus"></Text>
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
                  minHeight: height / 11,
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
                  <Text color="#8298b4" text="Bu Kartla Ödenecek Tutar"></Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: Dimensions.get("screen").height / 11,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    height: height / 20,
    flexDirection: "row",
  },
});

export { CreditCardInput };
