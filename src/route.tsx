import Signin from '@/components/organisms/auth/signin';
import Signup from '@/components/organisms/auth/signup';
import { Route, Routes } from 'react-router';
import AuthLayout from './components/pages/auth-layout';

export const RouteProvider = () => {
  return (
    <Routes>
      <Route
        path="/auth/signin"
        element={
          <AuthLayout>
            {' '}
            <Signin />{' '}
          </AuthLayout>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <AuthLayout>
            {' '}
            <Signup />{' '}
          </AuthLayout>
        }
      />
    </Routes>
  );
};
