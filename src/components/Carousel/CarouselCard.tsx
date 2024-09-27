import { memo, useMemo } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { BiSolidCity } from 'react-icons/bi';
import { cn } from '@/libs/utils';

interface CarouselCardProps {
  cardTitleText: string;
  cardDistance?: number;
  cardAddress: string;
  cardZone: string;
  cardCity: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  cardTitleText,
  cardDistance,
  cardAddress,
  cardZone,
  cardCity,
}: CarouselCardProps) => {
  const formattedDistance = useMemo(
    () => (cardDistance ? `${cardDistance.toFixed(2)} KM` : undefined),
    [cardDistance],
  );

  return (
    <div className="rounded-3xl px-0 flex flex-col justify-start">
      <div className="rounded-3xl p-6 flex flex-col justify-start bg-secondary-background">
        <div className="text-sm font-normal">
          <p className="!text-[#353435] font-work font-normal text-xl leading-tight">
            {cardTitleText}
          </p>
          <p className="!text-[#353435] leading-snug pt-2 pl-1">{cardAddress}</p>
          {formattedDistance && (
            <div className="flex flex-row pt-3">
              <MdLocationPin fill="#353435" size="20" />
              <p className="!text-[#353435] pl-1 flex-row">{formattedDistance}</p>
            </div>
          )}
          <div className={cn('flex flex-row pt-1', !formattedDistance && 'pt-3')}>
            <PiMapPinAreaFill fill="#353435" size="20" />
            <p className="!text-[#353435] pl-1 flex-row">{cardZone}</p>
          </div>
          <div className="flex flex-row pt-1">
            <BiSolidCity fill="#353435" size="20" />
            <p className="!text-[#353435] pl-1 flex-row">{cardCity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CarouselCard);
