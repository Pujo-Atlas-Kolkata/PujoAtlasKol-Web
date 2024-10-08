import { memo, useMemo } from 'react';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { cn } from '@/libs/utils';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
import { MdOutlineDirections, MdTrain, MdLocationPin } from 'react-icons/md';
import { useMutation } from '@/hooks';
import axios from 'axios';
import { Api } from '@/constants';
import type { Metro } from '@/types/pujo';

interface PandalCardProps {
  id: string;
  cardTitleText: string;
  cardDistance?: number;
  cardAddress: string;
  cardZone: string;
  lat: number;
  lon: number;
  metro: Metro;
}

const PandalCard: React.FC<PandalCardProps> = ({
  id,
  cardTitleText,
  cardDistance,
  cardAddress,
  cardZone,
  lat,
  lon,
  metro,
}: PandalCardProps) => {
  const formattedDistance = useMemo(
    () => (cardDistance ? `${cardDistance.toFixed(2)} km` : undefined),
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
            <MdTrain fill="#DCDCDD" size="20" />
            <p className="pl-1 !text-[#DCDCDD]">
              {metro.distance.toFixed(2)} km from {metro.name}
            </p>
          </div>
          <div className="flex flex-row pt-1 pl-6 gap-x-1">
            {metro.line.length > 0 &&
              metro.line.map((line, index) => (
                <span
                  key={`${index}-${line}`}
                  className={cn(
                    'px-2 py-0 font-semibold whitespace-nowrap rounded-3xl text-[0.8rem] font-work outline outline-1',
                    'bg-black flex flex-row items-center justify-center gap-x-1',
                    { 'outline-blue-400 !text-blue-400': line === 'Blue' },
                    { 'outline-orange-400 !text-orange-400': line === 'Orange' },
                    { 'outline-green-400 !text-green-400': line === 'Green' },
                    { 'outline-purple-600 !text-purple-600': line === 'Purple' },
                  )}
                >
                  <div
                    className={cn(
                      'h-2 w-2 aspect-square rounded-full',
                      { '!bg-blue-500': line === 'Blue' },
                      { '!bg-orange-400': line === 'Orange' },
                      { '!bg-green-400': line === 'Green' },
                      { '!bg-purple-600': line === 'Purple' },
                    )}
                  />
                  {line}
                </span>
              ))}
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
