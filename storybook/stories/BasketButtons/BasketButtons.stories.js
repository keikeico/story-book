import { storiesOf } from "@storybook/react-native";
import React from "react";
import { BasketButtons } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("BasketButtons", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("basket buttons", () => (
    <BasketButtons
      amount={(val) => {
        console.log(val);
      }}
      initialAmount={5}
    ></BasketButtons>
  ));
