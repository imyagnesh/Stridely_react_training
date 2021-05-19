import React, { useCallback, useEffect, useState } from 'react';
import axiosInstance from 'utils/fetcher';
import {
  TableHead,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';

const ProductList = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [manifacturers, setManifacturers] = useState([]);
  const [error, setError] = useState('');

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await Promise.all([
        axiosInstance.get('products'),
        axiosInstance.get('productTypes'),
        axiosInstance.get('manifacturers'),
      ]);
      setProducts(res[0]);
      setProductTypes(res[1]);
      setManifacturers(res[2]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const removeProduct = useCallback(async id => {
    try {
      setLoading(true);
      await axiosInstance.delete(`products/${id}`);
      setProducts(data => data.filter(x => x.id !== id));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  const updateProduct = useCallback(async product => {
    try {
      setLoading(true);
      const res = await axiosInstance.put(`products/${product.id}`, product);
      setProducts(data => data.map(x => (x.id === product.id ? res : x)));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  const getProductType = useCallback(
    id => productTypes.find(x => x.id === id)?.type || '',
    [productTypes],
  );

  const getManifacturer = useCallback(
    id => manifacturers.find(x => x.id === id)?.manifacturer || '',
    [manifacturers],
  );

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/admin/addProduct')}
          >
            Add Product
          </Button>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Manifacturer</TableCell>
                  <TableCell>Product Type</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantities</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{getManifacturer(product.manifacturerId)}</TableCell>
                    <TableCell>{getProductType(product.typeId)}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <div>
                        <IconButton
                          aria-label="add"
                          onClick={() =>
                            updateProduct({ ...product, quantities: product.quantities + 1 })
                          }
                        >
                          <AddIcon />
                        </IconButton>
                        <span style={{ padding: '0 8px' }}>{product.quantities}</span>
                        <IconButton
                          aria-label="remove"
                          onClick={() =>
                            updateProduct({ ...product, quantities: product.quantities - 1 })
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                      </div>
                    </TableCell>
                    <TableCell>
                      <IconButton aria-label="delete" onClick={() => removeProduct(product.id)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ProductList;
