import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import { Button } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button
      label="Hello button"
      bgColor="red"
      labelStyle={{ fontFamily: "AvenirNext-Bold" }}
      onPress={action("clicked-text")}
    ></Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
