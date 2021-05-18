import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import Form from 'components/form';
import { fields, initialValues } from './fields';
import './styles.scss';

const Signup = ({ history }) => {
  const submitForm = async (value, props) => {
    console.log(props);
    try {
    } catch (error) {}
  };

  return (
    <div id="signupContainer">
      <div>
        <h2>Sign Up</h2>
      </div>
      <Form
        fields={fields}
        initialValues={initialValues}
        onSubmit={submitForm}
        buttonProps={{
          children: 'Sign Up',
        }}
      />
    </div>
  );
};

export default Signup;
