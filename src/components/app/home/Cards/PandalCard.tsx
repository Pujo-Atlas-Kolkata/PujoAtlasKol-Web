import { memo, useMemo } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { BiSolidCity } from 'react-icons/bi';
import { cn } from '@/libs/utils';

interface PandalCardProps {
  cardTitleText: string;
  cardDistance?: number;
  cardAddress: string;
  cardZone: string;
  cardCity: string;
  lat: number;
  lon: number;
}

const PandalCard: React.FC<PandalCardProps> = ({
  cardTitleText,
  cardDistance,
  cardAddress,
  cardZone,
  cardCity,
  lat,
  lon,
}: PandalCardProps) => {
  const formattedDistance = useMemo(
    () => (cardDistance ? `${cardDistance.toFixed(2)} KM` : undefined),
    [cardDistance],
  );

  return (
    <div className="rounded-3xl p-2 pt-1 px-0 flex flex-col justify-start">
      <div className="rounded-3xl p-6 py-8 flex flex-col justify-start bg-[#353435]">
        <div className="text-sm font-normal">
          <p className="!text-[#DCDCDD] font-work font-normal text-xl leading-tight">
            {cardTitleText}
          </p>
          <p className="!text-[#DCDCDD] leading-snug pt-2">{cardAddress}</p>
          {formattedDistance && (
            <div className="flex flex-row pt-3">
              <MdLocationPin fill="#DCDCDD" size="20" />
              <p className="!text-[#DCDCDD] pl-1 flex-row">{formattedDistance}</p>
            </div>
          )}
          <div className={cn('flex flex-row pt-1', !formattedDistance && 'pt-3')}>
            <PiMapPinAreaFill fill="#DCDCDD" size="20" />
            <p className="!text-[#DCDCDD] pl-1 flex-row">{cardZone}</p>
          </div>
          <div className="flex flex-row pt-1">
            <BiSolidCity fill="#DCDCDD" size="20" />
            <p className="!text-[#DCDCDD] pl-1 flex-row">{cardCity}</p>
          </div>
        </div>
        <div className="flex justify-between gap-x-4 mt-6">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex rounded-md border-2 border-black bg-[#ccbea1] p-2 text-base active:translate-x-0 active:translate-y-0 transition-all font-semibold"
          >
            Get Directions
          </a>
          <a
            onClick={() => {
              localStorage.setItem(
                'showOnMap',
                JSON.stringify({
                  lat,
                  lon,
                }),
              );
            }}
            href="/app/pandals"
            className="flex rounded-md border-2 border-black bg-[#ccbea1] p-2 text-base active:translate-x-0 active:translate-y-0 transition-all font-semibold"
          >
            Show on Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(PandalCard);
