import { useCallback } from 'react';
import axios from 'utils/fetcher';

const useApiCalls = dispatch => {
  const getData = useCallback(
    async ({ url, type }) => {
      try {
        dispatch({ type: `${type}_REQUEST` });
        const res = await axios.get(url);
        dispatch({ type: `${type}_SUCCESS`, payload: res.data });
      } catch (err) {
        dispatch({ type: `${type}_ERROR`, payload: err });
      }
    },
    [dispatch],
  );

  const addData = useCallback(
    async ({ url, data, type }) => {
      try {
        dispatch({ type: `${type}_REQUEST` });
        const res = await axios.post(url, data);
        dispatch({ type: `${type}_SUCCESS`, payload: res.data });
      } catch (err) {
        dispatch({ type: `${type}_ERROR`, payload: err });
      }
    },
    [dispatch],
  );

  const updateData = useCallback(
    async ({ url, data, type }) => {
      try {
        dispatch({ type: `${type}_REQUEST` });
        const res = await axios.put(url, data);
        dispatch({ type: `${type}_SUCCESS`, payload: res.data });
      } catch (err) {
        dispatch({ type: `${type}_ERROR`, payload: err });
      }
    },
    [dispatch],
  );

  const deleteData = useCallback(
    async ({ url, type }) => {
      try {
        dispatch({ type: `${type}_REQUEST` });
        const res = await axios.delete(url);
        dispatch({ type: `${type}_SUCCESS`, payload: res.data });
      } catch (err) {
        dispatch({ type: `${type}_ERROR`, payload: err });
      }
    },
    [dispatch],
  );

  return { getData, addData, updateData, deleteData };
};

export default useApiCalls;
