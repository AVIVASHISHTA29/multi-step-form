import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

function StepThree({ handleInputChange }) {
  return (
    <>
      <Label>
        Phonenumber:
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </Label>
      <Label>
        Age:
        <input type="number" name="age" onChange={handleInputChange} />
      </Label>
    </>
  );
}

export default StepThree;
