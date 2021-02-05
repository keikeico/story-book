import { storiesOf } from "@storybook/react-native";
import React from "react";
import { CreditCardInput } from ".";
import CenterView from "../CenterView";

storiesOf("CreditCardInput", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("CreditCardInput", () => <CreditCardInput></CreditCardInput>);