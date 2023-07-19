import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

function StepOne({ handleInputChange }) {
  return (
    <>
      <Label>
        First Name:
        <input type="text" name="firstName" onChange={handleInputChange} />
      </Label>
      <Label>
        Last Name:
        <input type="text" name="lastName" onChange={handleInputChange} />
      </Label>
    </>
  );
}

export default StepOne;
