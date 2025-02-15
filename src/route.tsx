import Signin from '@/components/organisms/auth/signin';
import Signup from '@/components/organisms/auth/signup';
import { Route, Routes } from 'react-router';

export const RouteProvider = () => {
  return (
    <Routes>
      <Route path="/auth/signin" element={<Signin />} />
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
  );
};
