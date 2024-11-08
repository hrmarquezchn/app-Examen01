import React, { createContext, useState, ReactNode } from 'react';
import { View, Text } from 'react-native';


type Transaction = {
  id: string; 
  type: 'deposit' | 'withdraw' | 'transfer';
  monto: number;
  detalle: string;
};


interface BalanceContextProps {
  balance: number;
  transactions: Transaction[];
  addTransaction: (type: 'deposit' | 'withdraw' | 'transfer', monto: number) => void;
}


export const BalanceContext = createContext<BalanceContextProps | null>(null);


export const BalanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

 
  const addBalance = (monto: number) => {
    setBalance(balance + monto);
    addTransaction('deposit', monto);
  };

 
  const transferBalance = (monto: number) => {
    if (monto <= balance) {
      setBalance(balance - monto);
      addTransaction('withdraw', monto); // Cambio a 'withdraw' en lugar de 'retiro'
      return true;
    } else {
      return false;
    }
  };

  const addTransaction = (type: 'deposit' | 'withdraw' | 'transfer', monto: number) => {
    const detalle = `${type === 'deposit' ? 'Depósito' : type === 'withdraw' ? 'Retiro' : 'Transferencia'} de $${monto}`;
    const newTransaction: Transaction = {
      id: Date.now().toString(), 
      type,
      monto,
      detalle,
    };
    setTransactions((prev) => [newTransaction, ...prev.slice(0, 4)]); // Limitar a las últimas 5 transacciones
  };

  return (
    <BalanceContext.Provider value={{ balance, transactions, addTransaction }}>
      {children}
    </BalanceContext.Provider>
  );
};