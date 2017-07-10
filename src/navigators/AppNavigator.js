import { TabNavigator } from 'react-navigation';
import * as screens from '../screens';

export default TabNavigator({
  Home: {
    path: 'home',
    screen: screens.HomeScreen
  },
  Characters: {
    path: 'characters',
    screen: screens.HomeScreen
  }
}, {
  lazy: true
});
