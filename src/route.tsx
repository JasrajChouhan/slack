import ProtectedRoute from '@/components/molecules/protect-route';
import SigninContainer from '@/components/organisms/auth/signin-container';
import SignupContainer from '@/components/organisms/auth/signup-container';
import AuthLayout from '@/components/pages/auth-layout';
import Home from '@/components/pages/home';
import { Route, Routes } from 'react-router';
import { WorkspaceLayout } from './components/layout/workspace';

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
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/workspaces/:workspaceId"
        element={
          <ProtectedRoute>
            <WorkspaceLayout>
              <h1>Workspace</h1>
            </WorkspaceLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
