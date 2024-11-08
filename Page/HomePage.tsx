import { View, Text } from 'react-native'
import React from 'react'
import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { BalanceContext } from '../context/BalanceContext';

const HomePage = () => {
  const balanceContext = useContext(BalanceContext);

  if (!balanceContext) return null;

  const { balance, transactions, addTransaction } = balanceContext;

  return (
    <View>
      <Text>Bienvenido MarkzBank!</Text>
      <Text>Saldo Actual: L.{balance}</Text>
      <Button title="Depositar L.500" onPress={() => addTransaction('deposit', 500)} />
      <Text>Historial de Transacciones:</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.type} de L.{item.monto}</Text>}
      />
    </View>
  );
};

export default HomePage;