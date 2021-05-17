/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import './styles.scss';
import axiosInstance from 'utils/fetcher';
import Form from 'components/form';
import { AuthContext } from 'src/context/authContext';
// eslint-disable-next-line import/extensions
import { fields, initialValues } from './fields';

// eslint-disable-next-line react/prop-types
const Register = ({ history }) => {
  const [, setAuth] = useContext(AuthContext);

  const submitForm = async (value, props) => {
    // console.log(props);
    // try {
    //   const res = await axiosInstance.post(
    //     'https://calm-oasis-43947.herokuapp.com/auth/local',
    //     value,
    //   );
    //   // eslint-disable-next-line no-console
    //   console.log(res);
    //   sessionStorage.setItem('token', res.jwt);
    //   setAuth(res.jwt);
    //   history.push('/');
    //   props.resetForm();
    // } catch (error) {
    //   props.resetForm();
    //   props.setErrors({
    //     serverError: error.message,
    //   });
    // }
  };
  
  return (
    <div id="RegisterContainer">
      <div>
        <h2>Regsiter</h2>
      </div>
      <Form
        fields={fields}
        initialValues={initialValues}
        onSubmit={submitForm}
        buttonProps={{
          children: 'Register',
        }}
      />
    </div>
  );
};

export default Register;
