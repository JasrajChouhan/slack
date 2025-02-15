import { Card } from '@/components/ui/card';

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Card className="h-auto w-full">{children}</Card>;
};
export default CardWrapper;
