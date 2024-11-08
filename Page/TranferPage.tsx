import { View, Text } from 'react-native'
import React from 'react'
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { BalanceContext } from '../context/BalanceContext';

const TransferPage = () => {
  const balanceContext = useContext(BalanceContext);
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  if (!balanceContext) return null;

  const { balance, addTransaction } = balanceContext;

  const handleTransfer = () => {
    const transferAmount = parseFloat(amount);
    if (transferAmount > balance) {
      Alert.alert("Saldo insuficiente");
    } else {
      addTransaction('transfer', transferAmount);
      Alert.alert("Transferencia exitosa");
    }
  };

  return (
    <View>
      <Text>Transferir a otra cuenta</Text>
      <TextInput placeholder="Número de cuenta" value={account} onChangeText={setAccount} />
      <TextInput placeholder="Monto" value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Button title="Transferir" onPress={handleTransfer} />
    </View>
  );
};

export default TransferPage;
