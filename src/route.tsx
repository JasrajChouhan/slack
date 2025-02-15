import { Route, Routes } from 'react-router';
import SigninContainer from './components/organisms/auth/signin-container';
import SignupContainer from './components/organisms/auth/signup-container';
import AuthLayout from './components/pages/auth-layout';

export const RouteProvider = () => {
  return (
    <Routes>
      <Route
        path="/auth/signin"
        element={
          <AuthLayout>
            {' '}
            <SigninContainer />{' '}
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
