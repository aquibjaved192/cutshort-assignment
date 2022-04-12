import React, { useState } from 'react';
import Card from '../reusableComponents/card';

function StepThree(props) {
  const { handleSetStep } = props;
  const [userType, setUserType] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if(userType === "") {
      setError(true);
    } else {
      handleSetStep({ userType });
    }
  }

  return(
    <div>
      <h2>How are you planning to use Eden?</h2>
      <p>We'll streamline your setup experience accordingly.</p>
      <div className='form-content'>
        <div className='card-container'>
          <Card
            type='user'
            heading="For myself"
            content="Write better. Think more clearly. Stay organized."
            setUserType={setUserType}
            userType={userType}
            setError={setError}
          />
          <Card 
            type='group'
            heading="With my team"
            content="wikis, docs, tasks &amp; projects, all in one place"
            setUserType={setUserType}
            userType={userType}
            setError={setError}
          />
        </div>
        { error && (
          <div className='error'>
            <label>*Required</label>
          </div>
        )}
        <button onClick={handleSubmit} type="button">Create Workspace</button>
      </div>
    </div>
  )
}

export default StepThree;