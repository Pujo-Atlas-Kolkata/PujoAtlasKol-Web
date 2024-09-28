import { memo } from 'react';

interface CarouselCardProps {
  cardTitleText: string;
  cardDistance?: number;
  cardAddress: string;
  cardZone: string;
  cardCity: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ cardTitleText }: CarouselCardProps) => {
  return (
    <div className="rounded-3xl px-0 flex flex-col h-full">
      <div className="rounded-3xl p-2 flex flex-col h-full">
        <div className="text-sm h-full flex flex-col items-center justify-center">
          <p className="!text-[#353435] font-work font-semibold text-base text-center leading-tight">
            {cardTitleText}
          </p>
          {/* <p className="!text-[#353435] leading-snug text-sm pt-2 pl-1">{cardAddress}</p>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default memo(CarouselCard);
