import { AlertTriangleIcon } from 'lucide-react';
const Alert = () => {
  return (
    <div className="flex h-full items-center justify-center gap-x-3">
      <AlertTriangleIcon className="text-6xl font-bold text-white" />
      <h2 className="text-muted">Something went wrong</h2>
    </div>
  );
};

export default Alert;
