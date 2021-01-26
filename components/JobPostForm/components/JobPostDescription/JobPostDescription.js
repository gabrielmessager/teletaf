import React from 'react';
// import * as Yup from 'yup';
// import { Formik, Form, Field, ErrorMessage, withFormik } from 'formik';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export function JobPostDescription() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log('errors', errors);
  console.log(watch('email'));
  console.log(watch('password'));

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input type="email" name="email" ref={register({ required: true })} />
      <input
        type="password"
        name="password"
        ref={register({ required: true })}
      />
      {errors.password && <span>Password is required</span>}
      {errors.email && <span>Email is required</span>}
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
