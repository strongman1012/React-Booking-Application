import React, { FC, useEffect, useState } from 'react';
import Router from './routes';
import 'devextreme/dist/css/dx.light.css';
import { useAppDispatch } from 'src/store/hooks';
import { initializeAuth, loginWithToken } from 'src/reducers/auth/authSlice';
import LoadingScreen from './components/Basic/LoadingScreen';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if token exists in localStorage
    const localStorageToken = localStorage.getItem('token');

    if (localStorageToken) {
      dispatch(initializeAuth());
      setIsLoading(false);
    } else {
      // If no token in localStorage, check URL params for token
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        loginToken(token);
      } else {
        setIsLoading(false);
      }
    }
  }, [dispatch]);

  const loginToken = async (token: string) => {
    setIsLoading(true);
    try {
      await dispatch(loginWithToken(token));
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen show={true} />;
  }

  return (
    <>
      <Router />
    </>
  );
};

export default App;
