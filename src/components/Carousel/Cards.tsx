import { useMemo } from 'react';
import type { Pandal } from '@/types';
import CarouselCard from './CarouselCard';
import { useTrendingPandals } from '@/hooks';
import { CgSpinner } from 'react-icons/cg';
import { Toaster } from 'react-hot-toast';

interface indexProp {
  index: number;
}

const Cards: React.FC<indexProp> = ({ index }: indexProp) => {
  const {
    data: trendingPandalsData,
    isLoading: trendingLoading,
    isError: trendingError,
  } = useTrendingPandals();

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
        <div className="rounded-3xl rounded-b-none flex-1 overflow-y-auto max-h-[calc(100dvh-20.5rem)] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
          <CarouselCard
            key={memoizedTrendingPandals[index].id}
            cardTitleText={memoizedTrendingPandals[index].name}
            cardDistance={memoizedTrendingPandals[index].distance}
            cardAddress={memoizedTrendingPandals[index].address}
            cardCity={memoizedTrendingPandals[index].city}
            cardZone={memoizedTrendingPandals[index].zone}
          />
        </div>
      );
    }

    return null;
  }, [trendingLoading, memoizedTrendingPandals, index]);

  return (
    <>
      {trendingLoading && (
        <div className="fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
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
