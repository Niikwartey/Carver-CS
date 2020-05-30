import React from 'react';
import { UserContextProvider } from './contexts/userContext';
import BudgetPlanner from './components/BudgetPlanner'

function App() {
  return (
    <div>
      <UserContextProvider>
        <BudgetPlanner />
      </UserContextProvider>
    </div>
  );
}

export default App;
