import Form from 'components/form';
import React, { useCallback, useEffect, useState } from 'react';
import axiosInstance from 'utils/fetcher';
import { fields, initialValues } from './fields';

const AddProduct = ({ history, match }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [initVal, setInitVal] = useState([]);
  const [defaultValues, setDefaultValues] = useState(initialValues);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const id = match?.params?.id;

      const promises = [axiosInstance.get('productTypes'), axiosInstance.get('manifacturers')];
      if (id) {
        promises.push(axiosInstance.get(`products/${id}`));
      }

      const res = await Promise.all(promises);

      console.log(res);

      const init = fields.map(x => {
        if (x.name === 'manifacturerId') {
          return { ...x, options: res[1].map(x1 => ({ value: x1.id, text: x1.manifacturer })) };
        }
        if (x.name === 'typeId') {
          return { ...x, options: res[0].map(x2 => ({ value: x2.id, text: x2.type })) };
        }
        return x;
      });

      if (res[2]) {
        setDefaultValues(res[2]);
      }

      console.log('init', init);
      setInitVal(init);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <h1>Add Product</h1>

      <Form
        fields={initVal}
        enableReinitialize={!!match?.params?.id}
        initialValues={defaultValues}
        onSubmit={async (value, actions) => {
          try {
            if (match?.params?.id) {
              await axiosInstance.put(`products/${match?.params?.id}`, value);
            } else {
              await axiosInstance.post('products', value);
            }
            actions.resetForm();
            history.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        buttonProps={{
          children: 'Add Product',
        }}
      />
    </div>
  );
};

export default AddProduct;
