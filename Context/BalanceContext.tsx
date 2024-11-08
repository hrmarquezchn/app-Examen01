import { View, Text } from 'react-native'
import React from 'react'
import React, { createContext, useState, ReactNode } from 'react';

type Transaction = {
  id: number;
  type: 'deposit' | 'withdraw' | 'transfer';
  amount: number;
};

interface BalanceContextProps {
  balance: number;
  transactions: Transaction[];
  addTransaction: (type: 'deposit' | 'withdraw' | 'transfer', amount: number) => void;
}

// Crear el contexto
export const BalanceContext = createContext<BalanceContextProps | null>(null);

// Definir el tipo de las props de BalanceProvider, incluyendo children
interface BalanceProviderProps {
  children: ReactNode;
}

export const BalanceProvider: React.FC = ({ children }) => {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (type: 'deposit' | 'withdraw' | 'transfer', amount: number) => {
    setBalance((prev) => (type === 'deposit' ? prev + amount : prev - amount));
    setTransactions((prev) => [{ id: Date.now(), type, amount }, ...prev].slice(0, 5));
  };

  return (
    <BalanceContext.Provider value={{ balance, transactions, addTransaction }}>
      {children}
    </BalanceContext.Provider>
  );
};