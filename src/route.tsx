import Signin from '@/components/organisms/auth/signin';
import Signup from '@/components/organisms/auth/signup';
import { Route, Routes } from 'react-router';
import AuthLayout from './components/pages/auth-layout';
import SignupContainer from './components/organisms/auth/signup-container';

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
            <SignupContainer />{' '}
          </AuthLayout>
        }
      />
    </Routes>
  );
};
