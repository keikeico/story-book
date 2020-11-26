import React from 'react';
import Text from './index';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

storiesOf('Text', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('small text', () => <Text fontSize={10} text={'deneme küçük'} />)
  .add('big text', () => <Text fontSize={30} text={'deneme büyük'} />);
