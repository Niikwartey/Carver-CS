import { useState } from 'react';

export default (initialState) => {
  const [editMode, setEditMode] = useState(true);
  const [election, setElection] = useState(initialState.election || 0);
  const [salary, setSalary] = useState(initialState.salary || 0);

  const toggleEditMode = () => setEditMode(!editMode);
  const updateElection = ({target}) => setElection( parseFloat(target.value) );
  const updateSalary = ({target}) => setSalary( parseFloat(target.value) || 0 );

  const monthlyIncome = salary / 12;
  const expense = monthlyIncome * (election / 100);;
  const savings = monthlyIncome - expense;

  return {
    editMode,
    election,
    salary,
    expense,
    savings,
    updateElection,
    updateSalary,
    toggleEditMode
  }
}