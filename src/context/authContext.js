import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        setLoding(true);
        const token = await sessionStorage.getItem('token');
        setAuth(token);
      } catch (error) {
      } finally {
        setLoding(false);
      }
    };
    checkToken();
  }, []);
  return <AuthContext.Provider value={[auth, setAuth, loding]}>{children}</AuthContext.Provider>;
};
