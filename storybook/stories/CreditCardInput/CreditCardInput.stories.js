import { storiesOf } from "@storybook/react-native";
import React from "react";
import { CreditCardInput } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("CreditCardInput", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("CreditCardInput", () => <CreditCardInput></CreditCardInput>);
