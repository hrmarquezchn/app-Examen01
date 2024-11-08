import { View, Text } from 'react-native'
import React from 'react'
import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { BalanceContext } from '../context/BalanceContext';

const HistoryPage = () => {
  const balanceContext = useContext(BalanceContext);

  if (!balanceContext) return null;

  const { transactions } = balanceContext;

  return (
    <View>
      <Text>Historial de Transacciones</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.type === 'deposit' ? 'Depósito' : 'Transferencia'} de L.{item.monto}</Text>
        )}
      />
    </View>
  );
};

export default HistoryPage;