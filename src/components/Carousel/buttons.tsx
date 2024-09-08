import { cn } from '@/libs/utils';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type ButtonProps = {
  type: 'prev' | 'next';
  action: () => void;
  className?: string;
};

export const ControlButton = ({ type, action, className = '' }: ButtonProps) => {
  return (
    <button
      title={type === 'prev' ? 'Previous' : 'Next'}
      type="button"
      onClick={() => action()}
      className={cn(
        'outline rounded-full hidden lg:grid place-items-center',
        'font-bold h-8 w-8 touch-manipulation transition-all duration-500',
        'bg-primary-background hover:bg-secondary-background',
        className,
      )}
    >
      {type === 'prev' && <MdChevronLeft className="w-full h-full" />}
      {type === 'next' && <MdChevronRight className="w-full h-full" />}
    </button>
  );
};
