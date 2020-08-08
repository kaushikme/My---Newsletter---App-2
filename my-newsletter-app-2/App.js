import * as React from 'react';
import { View } from 'react-native';
import MainScreen from './screens/MainScreen'
import BuzzerScreen from './screens/BuzzerScreen'
import BuzzerScreen1 from './screens/BuzzerScreen1'
import BuzzerScreen2 from './screens/BuzzerScreen2'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  MainScreen:MainScreen,
  BuzzerScreen : BuzzerScreen,
  BuzzerScreen1 : BuzzerScreen1,
  BuzzerScreen2  : BuzzerScreen2,
})

const AppContainer = createAppContainer(AppNavigator)
