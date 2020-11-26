import React from 'react';
import Input from './index';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

storiesOf('Input', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('small input', () => <Input fontSize={12} />)
  .add('big input', () => <Input fontSize={24} />);
