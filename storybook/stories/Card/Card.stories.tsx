import React from 'react';
import Card from './index';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

storiesOf('Card', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('little', () => <Card size={100} />)
  .add('big', () => <Card size={200} />);
