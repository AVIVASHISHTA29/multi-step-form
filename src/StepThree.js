import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

function StepThree({ register }) {
  return (
    <>
      <Label>
        Phonenumber:
        <input type="text" name="phoneNumber" {...register("phoneNumber")} />
      </Label>
      <Label>
        Age:
        <input type="number" name="age" {...register("age")} />
      </Label>
    </>
  );
}

export default StepThree;
