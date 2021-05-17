import React from 'react';
import { fields, initialValues } from './fields';
import Form from 'components/form';

const Register= () =>{ 
    return (
    <div id="loginContainer">
      <div>
        <h2>Registration</h2>
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
}

export default Register;
