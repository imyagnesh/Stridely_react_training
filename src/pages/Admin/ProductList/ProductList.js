/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useEffect } from 'react';
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
import PropTypes from 'prop-types';

const ProductList = ({
  history,
  loading,
  error,
  products,
  productTypes,
  manufacturers,
  loadProducts,
  updateProduct,
  deleteProduct,
}) => {
    
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const getProductType = useCallback(
    id => productTypes.find(x => x.id === id)?.type || '',
    [productTypes],
  );

  const getManufacturers = useCallback(
    id => manufacturers.find(x => x.id === id)?.manifacturer || '',
    [manufacturers],
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
          <Button variant="contained" color="primary" onClick={() => history.push('/addProduct')}>
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
                    <TableCell>{getManufacturers(product.manifacturerId)}</TableCell>
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
                      <IconButton aria-label="delete" onClick={() => deleteProduct(product)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        onClick={() => history.push(`/updateProduct/${product.id}`)}
                      >
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

ProductList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.objectOf(Error),
  products: PropTypes.array.isRequired,
  productTypes: PropTypes.array.isRequired,
  manufacturers: PropTypes.array.isRequired,
  loadProducts: PropTypes.func.isRequired,
  loadManufacturer: PropTypes.func.isRequired,
  loadProductTypes: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  error: null,
};

export default ProductList;
