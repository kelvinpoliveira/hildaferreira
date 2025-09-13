import React, { createContext, useContext } from 'react';
import CounterViewModel from '../viewmodels/CounterViewModel';
import TodoViewModel from '../viewmodels/TodoViewModel';

class RootStore {
  constructor() {
    this.counterViewModel = new CounterViewModel();
    this.todoViewModel = new TodoViewModel();
  }
}

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return store;
};

export default rootStore;