import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import StepFour from './step4';
import './forms.css';

function Forms(props) {
  const { step, handleSetStep, formData } = props;
  return(
      <div className="form">
        {step === 1 && (
          <StepOne 
            handleSetStep={handleSetStep}
          />
        )}
        {step === 2 && (
          <StepTwo 
            handleSetStep={handleSetStep}
          />
        )}
        {step === 3 && (
          <StepThree 
            handleSetStep={handleSetStep}
          />
        )}
        {step === 4 && (
          <StepFour 
            handleSetStep={handleSetStep}
            formData={formData}
          />
        )}
      </div>
  )
}

export default Forms;