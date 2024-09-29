import { memo } from 'react';

interface CarouselCardProps {
  cardTitleText: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ cardTitleText }: CarouselCardProps) => {
  return (
    <div className="rounded-3xl px-0 flex flex-col h-full">
      <div className="rounded-3xl p-2 flex flex-col h-full">
        <div className="text-sm h-full flex flex-col items-center justify-center">
          <p className="!text-[#353435] font-work font-semibold text-base text-center leading-tight">
            {cardTitleText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(CarouselCard);
