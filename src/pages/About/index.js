import React from 'react';

const About = ({ history }) => {
  console.log(history);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          history.replace('/users');
        }}
      >
        Go to Users Page
      </button>
    </div>
  );
};

export default About;
