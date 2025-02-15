import { CardFooter } from '@/components/ui/card';

export interface CardWrapperFooterProps {
  isFooter?: boolean;
  footerTitle?: string;
  showLink?: boolean;
  linkText?: string;
  onLinkClick?: () => void;
}

const CardWrapperFooter = ({ isFooter, footerTitle, showLink, linkText, onLinkClick }: CardWrapperFooterProps) => {
  return (
    <CardFooter className="flex items-center">
      {isFooter && <h2 className="text-muted-foreground">{footerTitle}</h2>}
      {showLink && (
        <span onClick={onLinkClick} className="ml-1 cursor-pointer text-blue-500 hover:underline">
          {linkText}
        </span>
      )}
    </CardFooter>
  );
};

export default CardWrapperFooter;
