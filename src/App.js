import React, { useState } from "react";
import styled from "styled-components";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Button } from "./components/Button";
import StepThree from "./StepThree";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 300px;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: #fff;
`;

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const totalPages = 4;
  const handleInputChange = (e) => {
    console.log("Inpit Change", {
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const nextStep = () => {
    if (step < totalPages) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <div
        style={{
          height: "10px",
          backgroundColor: "#4caf50",
          width: (step / totalPages) * 100 + "%",
          transition: "all 0.3s",
        }}
      ></div>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          {/* {step === 1 && <StepOne handleInputChange={handleInputChange} />}
        {step === 2 && <StepTwo handleInputChange={handleInputChange} />} */}

          {(() => {
            switch (step) {
              case 1:
                return <StepOne handleInputChange={handleInputChange} />;
              case 2:
                return <StepTwo handleInputChange={handleInputChange} />;
              case 3:
                return <StepThree handleInputChange={handleInputChange} />;
              case 4:
                return <StepThree handleInputChange={handleInputChange} />;
              default:
                return null;
            }
          })()}

          {step > 1 && (
            <Button type="button" onClick={prevStep}>
              Back
            </Button>
          )}
          {step < totalPages ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </Form>
      </Wrapper>
    </>
  );
}

export default App;
