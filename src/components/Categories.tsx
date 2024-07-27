import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { addCategory } from '../features/categoriesSlice';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);
  const [name, setName] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCategory = {
      id: Math.random().toString(36).substring(7),
      name,
      type
    };
    dispatch(addCategory(newCategory));
    setName('');
  };

  return (
    <div>
      <h2>Categories</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Type:
            <select value={type} onChange={e => setType(e.target.value as 'income' | 'expense')}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name} ({category.type})</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;