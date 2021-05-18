import React from 'react';
import Form from 'components/form';
import { fields, initialValues } from './fields';

const Registration = () => (
  <div id="loginContainer">
    <div>
      <h2>Registration</h2>
      <br />
    </div>
    <Form
      fields={fields}
      initialValues={initialValues}
      buttonProps={{
        children: 'Registration',
      }}
    />
  </div>
);

export default Registration;
