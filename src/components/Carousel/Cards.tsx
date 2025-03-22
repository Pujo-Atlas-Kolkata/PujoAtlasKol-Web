import { useEffect, useMemo } from 'react';
import type { Pandal } from '@/types';
import CarouselCard from './CarouselCard';
import { useMutation, useTrendingPandals } from '@/hooks';
import { cn } from '@/libs/utils';
import { Api } from '@/constants';
import axios from 'axios';

interface indexProp {
  index: number;
}

const Cards: React.FC<indexProp> = ({ index }: indexProp) => {
  const {
    data: trendingPandalsData,
    isLoading: trendingLoading,
    isError: trendingError,
  } = useTrendingPandals();

  useEffect(() => {
    const element = document.getElementById('carousel-placeholder');
    if (trendingPandalsData && element) {
      element.style.display = 'none';
    }
  }, []);

  const memoizedTrendingPandals = useMemo(() => {
    if (!trendingPandalsData?.result) return [];

    const pandalsWithDistance = trendingPandalsData.result.map((pandal: Pandal) => {
      return pandal;
    });

    return pandalsWithDistance.slice(0, 10);
  }, [trendingPandalsData?.result]);

  const { mutate: updateRanking } = useMutation({
    mutationFn: async (id: string) => {
      return axios.post(Api.Pujo.Searched, { ids: [id], term: 'navigate' });
    },
  });

  const content = useMemo(() => {
    if (trendingLoading) return null;

    const isClickedAble = window.screen.width < 780;

    if (memoizedTrendingPandals.length > 0) {
      return (
        <a
          onClick={() => {
            updateRanking(memoizedTrendingPandals[index].id);
            sessionStorage.setItem(
              'showOnMap',
              JSON.stringify({
                id: memoizedTrendingPandals[index].id,
                lat: memoizedTrendingPandals[index].lat,
                lon: memoizedTrendingPandals[index].lon,
              }),
            );
          }}
          href={isClickedAble ? '/app/pandals' : undefined}
          className={cn(
            'bg-secondary-background rounded-2xl p-2',
            'lg:w-11/12 md:w-5/6 w-1/4',
            'flex flex-col justify-center',
            'lg:w-full w-[95%] mx-2',
          )}
        >
          <img
            className="rounded-2xl h-96 lg:h-60 w-full"
            src={`/idols/${index + 1}.webp`}
            alt={`Picture of Idol ${index + 1}`}
          />
          <CarouselCard
            key={memoizedTrendingPandals[index].id}
            cardTitleText={memoizedTrendingPandals[index].name}
          />
        </a>
      );
    }

    return null;
  }, [trendingLoading, memoizedTrendingPandals, index, updateRanking]);

  return (
    <>
      {trendingError && (
        <div className="whitespace-nowrap font-work leading-tight text-sm !text-red-600 rounded-lg drop-shadow-sm text-left p-4 bg-primary-background fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
          Something went wrong.
          <br />
          Please try again later!
        </div>
      )}
      {content}
    </>
  );
};

export default Cards;
