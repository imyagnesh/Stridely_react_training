import React, { useContext } from 'react';
import './styles.scss';
import axiosInstance from 'utils/fetcher';
import Form from 'components/form';
import { AuthContext } from 'src/context/authContext';
import { fields, initialValues } from './fields';

const Register = ({ history }) => {
  const [, setAuth] = useContext(AuthContext);

  const submitForm = async (value, props) => {
    console.log(props);
  };
  return (
    <div id="registerContainer">
      <div>
        <h2>Register</h2>
      </div>
      <Form
        fields={fields}
        initialValues={initialValues}
        onSubmit={submitForm}
        buttonProps={{
          children: 'Register',
        }}
      />
      <button
        type="button"
        variant="contained"
        color="primary"
        className="clsLogin MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
        onClick={() => {
          history.push('/login');
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Register;
