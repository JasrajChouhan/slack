import { Loader2 } from 'lucide-react';
const Loader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Loader2 className="text-muted-foreground animate-spin text-6xl font-bold" />
      <h2>Please wait...</h2>
    </div>
  );
};

export default Loader;
