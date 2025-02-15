import { CardHeader } from '@/components/ui/card';

export interface CardWrapperHeaderProps {
  isHeader?: boolean;
  headerTitle?: string;
  isLabel?: boolean;
  label?: string;
}
const CardWrapperHeader = ({ isHeader, headerTitle, isLabel, label }: CardWrapperHeaderProps) => {
  return (
    <CardHeader className="text-center">
      <div>
        {isHeader && <h1 className="text-3xl font-bold">{headerTitle}</h1>}
        {isLabel && <h1 className="text-muted-foreground text-sm">{label}</h1>}
      </div>
    </CardHeader>
  );
};

export default CardWrapperHeader;
