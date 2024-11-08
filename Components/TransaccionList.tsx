import { View, FlatList, Text, StyleSheet } from 'react-native';
import React from 'react'

interface Transaction {
    id: string;
    description: string;
    amount: number;
  }
  
  interface TransactionListProps {
    transactions: Transaction[];
  }
  
  const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    return (
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>L. {item.amount.toFixed(2)}</Text>
          </View>
        )}
      />
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    description: {
      fontSize: 16,
      color: '#333',
    },
    amount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4CAF50',
    },
  });
  