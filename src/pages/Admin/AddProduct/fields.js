import SelectField from 'components/SelectField';
import TextInput from 'components/TextInput';

export const fields = [
  {
    name: 'name',
    initialValue: '',
    component: TextInput,
    label: 'Product Name',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'manifacturerId',
    initialValue: '',
    options: [],
    component: SelectField,
    label: 'Manifacturer',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'typeId',
    initialValue: '',
    component: SelectField,
    options: [],
    label: 'Product Type',
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'price',
    initialValue: 0,
    component: TextInput,
    type: 'number',
    label: 'Price',
    validate: value => {
      if (!value) {
        return 'required';
      }
      if (value <= 0) {
        return 'Price should be greter then 0';
      }
      return '';
    },
  },
  {
    name: 'currency',
    initialValue: 'INR',
    component: TextInput,
    label: 'Currency',
    disabled: true,
    validate: value => {
      if (!value) {
        return 'required';
      }
      return '';
    },
  },
  {
    name: 'quantities',
    initialValue: 0,
    component: TextInput,
    label: 'Quantity',
    type: 'number',
    validate: value => {
      if (!value) {
        return 'required';
      }
      if (value <= 0) {
        return 'Price should be greter then 0';
      }
      return '';
    },
  },
];

export const initialValues = fields.reduce((p, c) => ({ ...p, [c.name]: c.initialValue }), {});
