import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("text", () => <Text size={18} text={"Text text, Hello Text"}></Text>);
