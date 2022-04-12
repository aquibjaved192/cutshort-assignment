import React, { useState } from 'react';

function StepOne(props) {
  const { handleSetStep } = props;
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data  = {
      fullName,
      displayName,
    }
    handleSetStep(data);
  }

  return(
    <form name='onboard' onSubmit={handleSubmit}>
      <h2>Welcome! First things first...</h2>
      <p>You can always change them later.</p>
      <div className='form-content'>
        <div className='form-inputs'>
          <label>Full Name</label>
          <input
            type="text" 
            placeholder="Enter full name" 
            required 
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </div>
        <div className='form-inputs'>
          <label>Display Name</label>
          <input
            type="text" 
            placeholder="Enter display name" 
            required 
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />
        </div>
        <button type="submit">Create Workspace</button>
      </div>
    </form>
  )
}

export default StepOne;