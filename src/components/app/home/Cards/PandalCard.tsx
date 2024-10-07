import { memo, useMemo } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { BiSolidCity } from 'react-icons/bi';
import { cn } from '@/libs/utils';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
import { MdOutlineDirections } from 'react-icons/md';
import { useMutation } from '@/hooks';
import axios from 'axios';
import { Api } from '@/constants';

interface PandalCardProps {
  id: string;
  cardTitleText: string;
  cardDistance?: number;
  cardAddress: string;
  cardZone: string;
  cardCity: string;
  lat: number;
  lon: number;
}

const PandalCard: React.FC<PandalCardProps> = ({
  id,
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

  const { mutate: updateRanking } = useMutation({
    mutationFn: async () => {
      return axios.post(Api.Pujo.Searched, { ids: [id], term: 'navigate' });
    },
  });

  return (
    <div className="rounded-3xl p-2 pt-1 px-0 flex flex-col justify-start">
      <div className="rounded-3xl p-6 py-8 pb-5 flex flex-col justify-start bg-[#353435]">
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
        <div className="flex justify-between gap-x-4 mt-5 mb-0 w-full">
          <a
            onClick={() => updateRanking()}
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex flex-1 items-center justify-center rounded-xl overflow-hidden ',
              'border border-black bg-orange-100 p-2',
              'text-sm active:translate-x-0 active:translate-y-0',
              'transition-all font-semibold text-center',
            )}
          >
            <div className="gap-x-1 flex flex-row justify-center items-center">
              Directions
              <MdOutlineDirections size={20} className="animate-arrow-left-right fill-black" />
            </div>
          </a>
          <a
            onClick={() => {
              updateRanking();
              sessionStorage.setItem(
                'showOnMap',
                JSON.stringify({
                  id,
                  lat,
                  lon,
                }),
              );
            }}
            href="/app/pandals"
            className="flex flex-1 rounded-xl border border-black bg-orange-100 p-2 text-sm active:translate-x-0 active:translate-y-0 transition-all font-semibold text-center items-center justify-center"
          >
            <div className="gap-x-1 flex flex-1 flex-row justify-center items-center">
              View Map
              <LiaMapMarkedAltSolid size={20} className="fill-black" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(PandalCard);
