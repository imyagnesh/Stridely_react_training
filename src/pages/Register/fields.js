import TextInput from 'components/TextInput';

export const fields = [
  {
    name: 'identifier',
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
    name: 'confirmPassword',
    initialValue: '',
    component: TextInput,
    label: 'Confirm Password',
    type: 'password',
    validate: value => {
      if (!value) {
        return 'required';
      }
      if (document.getElementsByName('password')[0].value !== value) {
        return 'password not matched';
      }
      return '';
    },
  },
];

export const initialValues = fields.reduce((p, c) => ({ ...p, [c.name]: c.initialValue }), {});
