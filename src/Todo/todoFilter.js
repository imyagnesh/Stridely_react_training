import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({ changeStatus }) => {
  console.log('TodoFilter');
  return (
    <div className="filterContainer">
      <button type="button" onClick={() => changeStatus('all')}>
        All
      </button>
      <button type="button" onClick={() => changeStatus('pending')}>
        Pending
      </button>
      <button type="button" onClick={() => changeStatus('completed')}>
        Completed
      </button>
    </div>
  );
};

TodoFilter.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default memo(TodoFilter, () => true);
