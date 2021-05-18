import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoFilter = forwardRef(({ changeStatus }, ref) => {
  const { allButtonRef, pendingButtonRef, completedButtonRef } = ref;
  return (
    <div className="filterContainer">
      <button ref={allButtonRef} type="button" onClick={() => changeStatus('all')}>
        All
      </button>
      <button ref={pendingButtonRef} type="button" onClick={() => changeStatus('pending')}>
        Pending
      </button>
      <button ref={completedButtonRef} type="button" onClick={() => changeStatus('completed')}>
        Completed
      </button>
    </div>
  );
});

TodoFilter.propTypes = {
  changeStatus: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
