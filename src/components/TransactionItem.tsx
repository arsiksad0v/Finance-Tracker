import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../features/transactionsSlice';
import { Transaction } from '../features/transactionsSlice';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      dispatch(deleteTransaction(transaction.id));
    }
  };

  return (
    <li>
      <span>{transaction.createdAt}</span>
      <span>{transaction.category}</span>
      <span>{transaction.amount} KGS</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TransactionItem;