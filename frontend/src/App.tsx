import React, { useState, useEffect } from 'react';
import { url } from './utils';
import './App.css';

import EmployeeForm from './components/EmployeeForm';

export interface Employee {
  firstName: string;
  lastName: string;
}

function App() {
  const [isCreating, setIsCreating] = useState(false);
  const [employees, setEmployees] = useState([]);

  async function getEmployees() {
    const resp = await fetch(`${url}/employees`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await resp.json();

    setEmployees(JSON.parse(data));
  }

  useEffect(() => {
    getEmployees();
  }, []);

  function toggleCreateForm() {
    setIsCreating(o => !o);
  }

  async function create(employee: Employee) {
    const options: RequestInit = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee }),
    };

    try {
      await fetch(`${url}/employees`, options);
      toggleCreateForm();
      getEmployees();
    } catch (e) {
      console.log('ERR', e);
    }
  }

  const list = employees.map(({ firstName, lastName }) => (
    <li>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </li>
  ));

  console.log('EMPLOYEES', employees);

  return (
    <div className='App'>
      <ul>{list}</ul>
      <button onClick={toggleCreateForm}>New Employee</button>
      {isCreating && <EmployeeForm handleSubmit={create} />}
    </div>
  );
}

export default App;
