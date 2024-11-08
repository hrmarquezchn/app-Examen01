import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

interface BalanceProps {
    balance: number;
  }
  
  const Balance: React.FC<BalanceProps> = ({ balance }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Saldo Actual</Text>
        <Text style={styles.amount}>L. {balance.toFixed(2)}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
    amount: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#4CAF50',
    },
  });
  
  export default Balance;