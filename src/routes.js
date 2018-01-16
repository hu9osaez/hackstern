import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './screens';

const RootNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});


export default RootNavigator;
