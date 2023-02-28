import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabNavigator} from 'screens/BottomTabs.navigator';
import {AppProvider} from './App.provider';
import {Platform, UIManager} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
