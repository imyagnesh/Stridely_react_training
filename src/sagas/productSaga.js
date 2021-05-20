import { initialValues } from 'pages/Admin/AddProduct/fields';
import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects';
import axiosInstance from 'utils/fetcher';

const loadData = async () => {
  const res = await Promise.allSettled([
    axiosInstance.get('products'),
    axiosInstance.get('productTypes'),
    axiosInstance.get('manifacturers'),
  ]);
  return res;
};

function* loadProducts() {
  yield put({ type: 'LOAD_PRODUCT_TYPES_REQUEST' });
  yield put({ type: 'LOAD_MANUFACTURER_REQUEST' });
  const [productRes, productTypesRes, manifacturersRes] = yield call(loadData);

  if (productRes.status === 'fulfilled') {
    yield put({ type: 'LOAD_PRODUCTS_SUCCESS', payload: productRes.value });
  } else {
    yield put({ type: 'LOAD_PRODUCTS_FAIL', payload: productRes.reason });
  }
  if (productTypesRes.status === 'fulfilled') {
    yield put({ type: 'LOAD_PRODUCT_TYPES_SUCCESS', payload: productTypesRes.value });
  } else {
    yield put({ type: 'LOAD_PRODUCT_TYPES_FAIL', payload: productTypesRes.reason });
  }
  if (manifacturersRes.status === 'fulfilled') {
    yield put({ type: 'LOAD_MANUFACTURER_SUCCESS', payload: manifacturersRes.value });
  } else {
    yield put({ type: 'LOAD_MANUFACTURER_FAIL', payload: manifacturersRes.reason });
  }
}

function* updateProduct({ payload, actions }) {
  try {
    console.log(actions);
    const product = yield call(axiosInstance.put, `products/${payload.id}`, payload);
    yield put({ type: 'UPDATE_PRODUCTS_SUCCESS', payload: product });
    if (actions) {
      yield call(actions.resetForm, initialValues);
    }
  } catch (error) {
    yield put({ type: 'UPDATE_PRODUCTS_FAIL', payload: error });
  }
}

function* deleteProduct({ payload }) {
  try {
    yield call(axiosInstance.delete, `products/${payload.id}`);
    yield put({ type: 'DELETE_PRODUCTS_SUCCESS', payload });
  } catch (error) {
    yield put({ type: 'DELETE_PRODUCTS_FAIL', payload: error });
  }
}

function* addProducts({ payload, actions }) {
  try {
    const product = yield call(axiosInstance.post, 'products', payload);
    yield put({ type: 'ADD_PRODUCTS_SUCCESS', payload: product });
    yield call(actions.resetForm);
  } catch (error) {
    yield put({ type: 'ADD_PRODUCTS_FAIL', payload: error });
    // yield call(actions.resetForm);
  }
}

export default function* root() {
  yield all([
    takeEvery('LOAD_PRODUCTS_REQUEST', loadProducts),
    takeEvery('ADD_PRODUCTS_REQUEST', addProducts),
    takeLatest('UPDATE_PRODUCTS_REQUEST', updateProduct),
    takeLatest('DELETE_PRODUCTS_REQUEST', deleteProduct),
  ]);
}
