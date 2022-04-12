import React, {useState} from 'react';
import StepLabel from './stepLabel';
import Forms from './forms';
import logo from './assets/logo.png';
import './index.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  function handleSetStep(values) {
    if(step < 4) {
      setStep(step + 1);
    }
    const data = { ...formData, ...values };
    setFormData(data);
  }

  return (
    <div className='app-container'>
      <div className='app'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
          <h2>Eden</h2>
        </div>
        <StepLabel
          step={step}
        />
        <Forms 
          step={step} 
          handleSetStep={handleSetStep} 
          formData={formData}
        />
      </div>
    </div>
  );
}

export default App;
