import React from 'react';
import { Transaction } from '../features/transactionsSlice';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <ul>
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default TransactionList;