import { useAuth } from '@/context';
import { Loader2 } from 'lucide-react';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuth();
  console.log(auth);
  if (auth.isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="text-muted-foreground animate-spin text-6xl font-bold" />
        <h2>Please wait...</h2>
      </div>
    );
  }

  if (!auth.user || !auth.token) {
    return <Navigate to={'/auth/signin'} />;
  }
  return children;
};

export default ProtectedRoute;
