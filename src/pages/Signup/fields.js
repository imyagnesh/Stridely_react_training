import TextInput from 'components/TextInput';

export const fields = [
  {
    name: 'name',
    initialValue: '',
    component: TextInput,
    label: 'Name',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'username',
    initialValue: '',
    component: TextInput,
    label: 'Username',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'password',
    initialValue: '',
    component: TextInput,
    label: 'Password',
    type: 'password',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'confirmpassword',
    initialValue: '',
    component: TextInput,
    label: 'Confirm Password',
    type: 'password',
    validate: value => {
      if (!value) {
        return 'required';
      }
      if (document.getElementsByName('password')[0].value !== value) {
        return 'Password and Confirm Password should be the same.';
      }
      return '';
    },
  },
];

export const initialValues = fields.reduce((p, c) => ({ ...p, [c.name]: c.initialValue }), {});
