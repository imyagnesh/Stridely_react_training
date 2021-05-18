import Form from 'components/form';
import React from 'react';
import { fields, initialValues } from './fields';

const Registration = () => {
   
        return (
            <div id="loginContainer">
              <div>
                <h2>Registration</h2>
              </div>
              <Form
                fields={fields}
                initialValues={initialValues}
                buttonProps={{
                  children: 'Sign UP',
                }}
              />
            </div>
        )
    
}

export default Registration;
