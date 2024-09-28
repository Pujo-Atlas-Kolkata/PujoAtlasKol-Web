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
  pandalLocation: { latitude: number; longitude: number };
}

const PandalCard: React.FC<PandalCardProps> = ({
  cardTitleText,
  cardDistance,
  cardAddress,
  cardZone,
  cardCity,
  pandalLocation,
}: PandalCardProps) => {
  const formattedDistance = useMemo(
    () => (cardDistance ? `${cardDistance.toFixed(2)} KM` : undefined),
    [cardDistance],
  );

  const showDirection = (e: React.FormEvent, navigation: boolean, lat: number, lon: number) => {
    e.preventDefault();
    const url = `https://www.google.com/maps/${navigation ? 'dir/?api=1&destination=' : '@'}${lat},${lon}`;
    try {
      window.open(url, '_blank');
    } catch (error) {
      console.error('Failed to open direction URL: ', error);
    }
  };

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
        <div className="flex justify-center gap-x-4 mt-6">
          <button
            onClick={(e) =>
              showDirection(e, true, pandalLocation.latitude, pandalLocation.longitude)
            }
            className="flex rounded-md border-2 border-black bg-amber-500 p-2 text-base active:translate-x-0 active:translate-y-0 transition-all font-semibold"
          >
            Get Directions
          </button>
          <button
            onClick={(e) =>
              showDirection(e, false, pandalLocation.latitude, pandalLocation.longitude)
            }
            className="flex rounded-md border-2 border-black bg-amber-500 p-2 text-base active:translate-x-0 active:translate-y-0 transition-all font-semibold"
          >
            Show on Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(PandalCard);
