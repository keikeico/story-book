import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import { Input } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("Input", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Input", () => (
    <Input
      overlay
      containerStyle={{
        width: "90%",
        alignSelf: "center",
      }}
      placeholder={"İsim Soyisim"}
      onType={(val) => {}}
      valid
    ></Input>
  ));
