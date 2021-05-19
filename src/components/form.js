import { Button } from '@material-ui/core';
import { Field, Formik } from 'formik';
import React from 'react';

const Form = ({ fields, buttonProps, ...rest }) => (
  <Formik {...rest}>
    {({ handleSubmit, isSubmitting, errors }) => (
      <form onSubmit={handleSubmit}>
        {errors.serverError && <p>{errors.serverError}</p>}
        {fields.map(x => (
          <Field key={x.name} {...x} />
        ))}
        <Button
          disabled={isSubmitting}
          variant="contained"
          type="submit"
          color="primary"
          {...buttonProps}
        />
      </form>
    )}
  </Formik>
);

export default Form;
