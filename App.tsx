import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { BalanceProvider } from './context/BalanceContext';
export default function App() {
  return (
    <BalanceProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </BalanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
