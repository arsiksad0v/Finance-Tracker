import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction } from '../features/transactionsSlice';
import { RootState } from '../app/store';

const TransactionModal: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.random().toString(36).substring(7),
      category,
      amount,
      createdAt: new Date().toISOString(),
    };
    dispatch(addTransaction(newTransaction));
    setCategory('');
    setAmount(0);
  };

  const filteredCategories = categories.filter(c => c.type === type);

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Type:
            <select value={type} onChange={e => setType(e.target.value as 'income' | 'expense')}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Category:
            <select value={category} onChange={e => setCategory(e.target.value)}>
              {filteredCategories.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TransactionModal;