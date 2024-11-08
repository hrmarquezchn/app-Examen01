import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import TransferPage from '../screens/TransferPage';
import HistoryPage from '../screens/HistoryPage';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomePage} />
      <Tab.Screen name="Transferencias" component={TransferPage} />
      <Tab.Screen name="Histórico" component={HistoryPage} />
    </Tab.Navigator>
  );
  
  export default AppNavigator;