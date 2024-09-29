import { useEffect, useMemo } from 'react';
import type { Pandal } from '@/types';
import CarouselCard from './CarouselCard';
import { useTrendingPandals } from '@/hooks';
import { CgSpinner } from 'react-icons/cg';
import { Toaster } from 'react-hot-toast';
import { cn } from '@/libs/utils';

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
  }, [trendingPandalsData]);

  const memoizedTrendingPandals = useMemo(() => {
    if (!trendingPandalsData?.result) return [];

    const pandalsWithDistance = trendingPandalsData.result.map((pandal: Pandal) => {
      return pandal;
    });

    return pandalsWithDistance.slice(0, 10);
  }, [trendingPandalsData?.result]);

  const content = useMemo(() => {
    if (trendingLoading) return null;

    if (memoizedTrendingPandals.length > 0) {
      return (
        <div
          className={cn(
            'bg-secondary-background rounded-2xl p-2',
            'lg:w-11/12 md:w-5/6 w-1/4',
            'flex flex-col justify-center',
            'lg:w-full w-[95%] mx-2',
          )}
        >
          <img
            className="rounded-2xl lg:h-60 w-full"
            src={`/idols/${index + 1}.webp`}
            alt={`Picture of Idol ${index + 1}`}
          />
          <CarouselCard
            key={memoizedTrendingPandals[index].id}
            cardTitleText={memoizedTrendingPandals[index].name}
          />
        </div>
      );
    }

    return null;
  }, [trendingLoading, memoizedTrendingPandals, index]);

  return (
    <>
      {trendingLoading && (
        <div>
          <CgSpinner size={60} className="animate-spin" />
        </div>
      )}
      {trendingError && (
        <div className="whitespace-nowrap font-work leading-tight text-sm !text-red-600 rounded-lg drop-shadow-sm text-left p-4 bg-primary-background fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
          Something went wrong.
          <br />
          Please try again later!
        </div>
      )}
      {content}
      <Toaster />
    </>
  );
};

export default Cards;
