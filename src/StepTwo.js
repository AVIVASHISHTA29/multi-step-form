import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

function StepTwo({ register }) {
  return (
    <>
      <Label>
        Email:
        <input type="email" name="email" {...register("email")} />
      </Label>
      <Label>
        Password:
        <input type="password" name="password" {...register("password")} />
      </Label>
    </>
  );
}

export default StepTwo;
