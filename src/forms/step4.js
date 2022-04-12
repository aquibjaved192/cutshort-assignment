import '../stepLabel/stepLabel.css';

function StepFour(props) {
  const { formData } = props;
  return(
    <div>
      <div className="step-label">
        <div className='step active'>
          <div className="step-circle check-mark">&#x2713;</div>
        </div>
      </div>
      <h2>Congratulations, {formData.displayName}!</h2>
      <p>You have completed onboarding, You can start using the Eden!</p>
      <div className='form-content'>
        <button type="button">Launch Eden</button>
      </div>
    </div>
  )
}

export default StepFour;