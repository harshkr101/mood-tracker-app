import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabNavigator} from 'screens/BottomTabs.navigator';
import {AppProvider} from './App.provider';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
