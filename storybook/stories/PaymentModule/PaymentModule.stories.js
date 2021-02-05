import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ScrollView } from "react-native";
import { PaymentModule } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("PaymentModule", module)
  .addDecorator((getStory) => (
    <ScrollView style={{ flex: 1, backgroundColor: "grey" }}>
      {getStory()}
    </ScrollView>
  ))
  .add("PaymentModule", () => (
    <PaymentModule installment={(val) => {}}></PaymentModule>
  ));
