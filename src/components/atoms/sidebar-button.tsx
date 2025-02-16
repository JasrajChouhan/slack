import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export interface SidebarButtonProps {
  label: string;
  Icon?: any;
  isActive?: boolean;
  variant?: 'destructive' | 'default' | 'link' | 'outline' | 'secondary' | 'ghost' | null | undefined;
  onClick?: () => void;
}

const SidebarButton = ({ label, Icon, isActive, variant = 'ghost', ...props }: SidebarButtonProps) => {
  return (
    <button
      className={cn(
        'items-between flex w-full rounded-md px-1 py-2 transition-all duration-200',
        'text-white hover:bg-violet-800',
        isActive ? 'bg-violet-700' : 'bg-transparent',
      )}
      {...props}
    >
      {Icon && <Icon className="h-8 w-8 text-center md:h-6 md:w-6" />}
      <span className="mx-3 hidden sm:block">{label}</span>
    </button>
  );
};

export default SidebarButton;
