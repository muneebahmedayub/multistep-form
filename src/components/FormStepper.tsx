import React, { useState } from "react";
import { Stepper, Step, StepLabel, Paper } from "@material-ui/core";
import PersonnalInfoForm from "./PersonnalInfoForm";
import AccountDetailsForm from "./AccountDetailsForm";
import Review from "./Review";

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = ["Personal Information", "Account Details", "Review"];
  const [formValues, setFormValues] = useState({});

  const submit = (step: number) => {
    if (step === 3) {
      alert("Thank you for submitting your form");
      setActiveStep(0);
      setFormValues({});
    } else {
      setActiveStep(step);
    }
  };
  const getStepContent = (
    step: number,
    formValues: any,
    setFormValues: (formValues: any) => void,
    submit: (step: number) => void
  ) => {
    switch (step) {
      case 0:
        return (
          <PersonnalInfoForm
            submit={submit}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );
      case 1:
        return (
          <AccountDetailsForm
            submit={submit}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        );
      case 2:
        return <Review submit={submit} formValues={formValues} />;
      default:
        return "Unknown Step";
    }
  };
  return (
    <>
      <Paper elevation={3}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {getStepContent(activeStep, formValues, setFormValues, submit)}
      </Paper>
    </>
  );
};

export default FormStepper;
