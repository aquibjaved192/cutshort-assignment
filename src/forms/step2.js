import React, { useState } from 'react';

function StepTwo(props) {
  const { handleSetStep } = props;
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      workspaceName,
      workspaceUrl,
    }
    handleSetStep(data);
  }

  return(
    <form name='onboard' onSubmit={handleSubmit}>
      <h2>Let's setup a home for all your work</h2>
      <p>You can always create another workspace later.</p>
      <div className='form-content'>
        <div className='form-inputs'>
          <label>Workspace Name</label>
          <input
            type="text" 
            placeholder="Enter workspace name" 
            required 
            value={workspaceName}
            onChange={e => setWorkspaceName(e.target.value)}
          />
        </div>
        <div className='form-inputs'>
          <label>Workspace URL</label>
          <span>(optional)</span>
          <div className='workspace-url-field'>
            <div>www.eden.com/</div>
            <input
              type="text" 
              placeholder="Enter workspace url" 
              value={workspaceUrl}
              onChange={e => setWorkspaceUrl(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Create Workspace</button>
      </div>
    </form>
  )
}

export default StepTwo;