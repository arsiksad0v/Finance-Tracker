import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import TransactionList from './TransactionList';

const Home: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  const total = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <div>
      <h1>Finance Tracker</h1>
      <div>Total: {total} KGS</div>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Home;