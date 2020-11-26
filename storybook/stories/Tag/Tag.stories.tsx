import React from 'react';
import Tag from './index';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

storiesOf('Tag', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Tag title="deneme" />)
  .add('2nd', () => <Tag title="deneme22" />);
