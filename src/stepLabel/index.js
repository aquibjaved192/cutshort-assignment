import './stepLabel.css';

function StepLabel(props) {
  const { step } = props;

  return (
    <div className="step-label">
      <div className={`step ${step >= 1 ? 'active' : ''}`}>
        <div className="step-circle">1</div>
      </div>
      <div className={`label-line ${step >= 1 ? 'active' : ''}`} />

      <div className={`label-line ${step >= 2 ? 'active' : ''}`} />
      <div className={`step ${step >= 2 ? 'active' : ''}`}>
        <div className="step-circle">2</div>
      </div>
      <div className={`label-line ${step >= 2 ? 'active' : ''}`} />

      <div className={`label-line ${step >= 3 ? 'active' : ''}`} />
      <div className={`step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-circle">3</div>
      </div>
      <div className={`label-line ${step >= 3 ? 'active' : ''}`} />

      <div className={`label-line ${step >= 4 ? 'active' : ''}`} />
      <div className={`step ${step >= 4 ? 'active' : ''}`}>
          <div className="step-circle">4</div>
      </div>
    </div>
  );
}

export default StepLabel;