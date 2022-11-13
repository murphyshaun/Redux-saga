import React, { useEffect } from 'react';
import cityApi from 'api/cityApi';
import { Routes , Route, Navigate } from 'react-router-dom';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { AdminLayout } from 'components/Layout';
import { NotFound } from 'components/Common';

function App() {

  useEffect(() => {
    cityApi.getAll()
    .then(res => console.log(res))
  }, [])
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  console.log(isLoggedIn);
  
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/admin' element={!isLoggedIn ? <Navigate to='/login' replace /> : <AdminLayout />} />
      <Route path='*' element={<NotFound />} />
    </Routes >
  );
}

export default App;
