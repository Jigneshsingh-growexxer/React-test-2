import React, { useState } from "react";
import "./Stepper.css";

const StepperContainer = ({ value, onChange, children }) => {
  return (
    <div className="stepper-container">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          index,
          isActive: index === value,
          isCompleted: index < value,
          onClick: () => onChange(index),
        });
      })}
    </div>
  );
};

const Step = ({ index, title, message, isActive, isCompleted, onClick }) => {
  return (
    <div
      className={`step ${isActive ? "active" : ""} ${
        isCompleted ? "completed" : ""
      }`}
      onClick={onClick}
    >
      <div className="step-circle">{index + 1}</div>
      <div className="step-details">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  return (
    <StepperContainer value={selectedStepIndex} onChange={setSelectedStepIndex}>
      <Step title="Step 1" message="This is a description." />
      <Step title="Step 2" message="This is a description." />
      <Step title="Step 3" message="This is a description." />
    </StepperContainer>
  );
};

export default App;
