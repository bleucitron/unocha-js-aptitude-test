import React, { useState } from 'react';

import { Employee } from '../App';

interface EmployeeFormProps {
  handleSubmit(e: Employee): Promise<void>;
}

export default function EmployeeForm({ handleSubmit }: EmployeeFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    handleSubmit({
      firstName,
      lastName,
    });
  }

  return (
    <form onSubmit={submit}>
      <input
        value={firstName}
        placeholder='First name'
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        value={lastName}
        placeholder='Family name'
        onChange={e => setLastName(e.target.value)}
      />
      {firstName && lastName && <input value='Submit' type='submit' />}
    </form>
  );
}
