import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
}

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: []
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.categories.push(action.payload);
    },
    deleteCategory(state, action: PayloadAction<string>) {
      state.categories = state.categories.filter(category => category.id !== action.payload);
    }
  }
});

export const { addCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;