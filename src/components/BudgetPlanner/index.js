import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import usePlanner from '../../hooks/usePlanner'
import Login from '../auth/Login'
import GoogleAuthBtn from '../../components/auth/GoogleAuthBtn';
import { displayUSD } from '../../helpers';
import './style.css';

function BudgetPlanner() {
  const { user } = useContext(UserContext);
  
  const {
    editMode,
    election,
    salary,
    expense,
    savings,
    updateElection,
    updateSalary,
    toggleEditMode
  } = usePlanner({election: 15, salary: 100000});
  
  if (!user) {
    return <Login />;
  }

  return (
    <main className="BudgetPlanner">
      <div className="container">
        <header>
          <div>
            <GoogleAuthBtn />
          </div>
        
          <h3>
            Welcome to your monthly budget, {user.givenName}
          </h3>
        </header>

        <div className="successMessage">
          {
            !editMode &&
            <p>All changes have been saved. Thank you.</p>
          }
        </div>

        <section>
          <div className="budgetItem">
            <span className="name">election</span> 
            <span>
              {
                editMode &&
                <input type="range" min="1" max="30" value={election} onChange={updateElection} />
              }
              {election}%
            </span>
          </div>

          <div className="budgetItem salary">
            <span className="name">salary</span>
            <span>
              {
                editMode ?
                <span className="inputBox">
                  $ <input value={salary} onChange={updateSalary}/> .00
                </span>
                :
                displayUSD(salary)
              }
            </span> 
          </div>

          <div className="budgetItem">
            <span className="name">expense</span>
            <span>{displayUSD(expense)}</span>
          </div>

          <div className="budgetItem">
            <span className="name">savings</span>
            <span>{displayUSD(savings)}</span>
          </div>
        </section>

        <div className="edit">
          <button onClick={toggleEditMode} className={!editMode ? "saveMode" : ""}>
            {editMode ? "save" : "edit"}
          </button>
        </div>
      </div>
    </main>
  );
}

 
export default BudgetPlanner;