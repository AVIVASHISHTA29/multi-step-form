import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

function StepOne({ register, errors }) {
  return (
    <>
      <Label>
        First Name:
        <input
          type="text"
          name="firstName"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <p>Firstname is required.</p>}
      </Label>
      <Label>
        Last Name:
        <input type="text" name="lastName" {...register("lastName")} />
      </Label>
    </>
  );
}

export default StepOne;
