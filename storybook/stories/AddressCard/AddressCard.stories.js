import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import { AddressCard } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("AddressCard", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("AddressCard", () => (
    <AddressCard
      address={{
        alias: "İşyerim (Fatih)",
        name: "Kaan Kalyon",
        phoneNumber: "0532 *** *** 01",
        address: "Mesih Paşa Cad. Kalvan Center No:36 D:107 Fatih / İstanbul",
      }}
    ></AddressCard>
  ));
