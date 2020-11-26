import React from 'react';
import ImageBackgroundCard from './index';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

storiesOf('ImageBackgroundCard', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('little', () => (
    <ImageBackgroundCard
      text="DAILY DRESS"
      imageURL="https://i.ibb.co/30TT21D/dress.jpg"
    />
  ));
