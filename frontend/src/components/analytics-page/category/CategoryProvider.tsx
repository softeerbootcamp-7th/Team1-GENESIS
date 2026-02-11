import { type ReactNode } from 'react';

import { CategoryContext, type CategoryContextValue } from './CategoryContext';

interface CategoryProviderProps {
  value: CategoryContextValue;
  children: ReactNode;
}

const CategoryProvider = ({ value, children }: CategoryProviderProps) => {
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
