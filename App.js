import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WelcomeScreen from './Screens/WelcomeScreen'
import appTabNavigator from './Components/AppTabNavigator'
import AppDrawerNavigator from './Components/AppDrawerNavigator'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>

    </View>
  );
}
const switchNaigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  drawer: {screen: AppDrawerNavigator},
})

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
