import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

function StepTwo({ handleInputChange }) {
  return (
    <>
      <Label>
        Email:
        <input type="email" name="email" onChange={handleInputChange} />
      </Label>
      <Label>
        Password:
        <input type="password" name="password" onChange={handleInputChange} />
      </Label>
    </>
  );
}

export default StepTwo;
