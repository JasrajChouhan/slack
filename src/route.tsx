import { Route, Routes } from 'react-router';
import SigninContainer from './components/organisms/auth/signin-container';
import SignupContainer from './components/organisms/auth/signup-container';
import AuthLayout from './components/pages/auth-layout';
import ProtectedRoute from './components/molecules/protect-route';

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

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <div>
              <h1>I'm protected page</h1>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
