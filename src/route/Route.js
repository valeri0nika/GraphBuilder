import { StackNavigator } from 'react-navigation';

import UkraineAndOtherScreen from '../screens/UkraineAndOtherScreen';
import ChartScreen from '../screens/ChartScreen';

const RootStack = StackNavigator(
  {
    UkraineAndOtherScreen: {
      screen: UkraineAndOtherScreen,
    },
    ChartScreen: {
      screen: ChartScreen,
    },
  },
  {
    initialRouteName: 'UkraineAndOtherScreen',
  }
);

export default RootStack;
