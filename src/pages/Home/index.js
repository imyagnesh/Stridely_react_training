import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

const Home = ({ history, match, location }) => {
  let [isBlocking, setIsBlocking] = useState(false);

  return (
    <div>
      <Prompt
        when={isBlocking}
        message={location => `Are you sure you want to go to ${location.pathname}`}
      />
      <button
        type="button"
        onClick={() => {
          setIsBlocking(true);
          //   history.push('/about', {
          //     data: {
          //       name: 'yagnesh',
          //       age: 30,
          //     },
          //   });
        }}
      >
        Go to About Page
      </button>
    </div>
  );
};

export default Home;
