import { storiesOf } from "@storybook/react-native";
import React from "react";
import { BasketItem } from "@keikei/kk-ui-kit";
import CenterView from "../CenterView";

storiesOf("BasketItem", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Basket Item", () => (
    <BasketItem
      basket={{
        imageURL:
          "https://media.missguided.com/i/missguided/DD925864_01?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$",
        stockCode: "74773-018",
        name: "Kiremit krep kolsuz mini elbise",
        unitPrice: "14$",
        size: "36, 38, 40",
        color: "Bordo",

        amount: "3",
      }}
    ></BasketItem>
  ));
