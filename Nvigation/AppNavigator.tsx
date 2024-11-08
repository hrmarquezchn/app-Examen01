import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../page/HomePage';
import TransferPage from '../Page/TransferPage';
import HistoryPage from '../Page/HistoryPage';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomePage} />
      <Tab.Screen name="Transferencias" component={TransferPage} />
      <Tab.Screen name="Histórico" component={HistoryPage} />
    </Tab.Navigator>
  );
  
  export default AppNavigator;