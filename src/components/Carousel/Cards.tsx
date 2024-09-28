import { useEffect, useState, useMemo, useCallback } from 'react';
import { getDistance } from '@/libs/utils';
import type { Pandal } from '@/types';
import CarouselCard from './CarouselCard';
import { useTrendingPandals } from '@/hooks';
import { CgSpinner } from 'react-icons/cg';
import { Toaster } from 'react-hot-toast';

interface indexProp {
  index: number;
}

const Cards: React.FC<indexProp> = ({ index }: indexProp) => {
  const [isUserLocationAvailable, setIsUserLocationAvailable] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(
    null,
  );

  const handleError: PositionErrorCallback = useCallback((error) => {
    console.error('Error:', error);
    setIsUserLocationAvailable(false);
  }, []);

  const {
    data: trendingPandalsData,
    isLoading: trendingLoading,
    isError: trendingError,
  } = useTrendingPandals();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setIsUserLocationAvailable(true);
        }, handleError);
      } else {
        console.error('Geolocation is not supported by this browser.');
        setIsUserLocationAvailable(false);
      }
    };

    getLocation();
  }, [handleError]);

  const memoizedTrendingPandals = useMemo(() => {
    if (!trendingPandalsData?.result) return [];
    if (!userLocation) return trendingPandalsData.result.slice(0, 10);

    const pandalsWithDistance = trendingPandalsData.result.map((pandal: Pandal) => {
      if (userLocation) {
        const distance = getDistance(
          userLocation.latitude,
          userLocation.longitude,
          pandal.lat,
          pandal.lon,
        );
        return { ...pandal, distance };
      }
      return pandal;
    });

    return pandalsWithDistance.slice(0, 10);
  }, [userLocation, trendingPandalsData?.result]);

  const content = useMemo(() => {
    if (trendingLoading && !isUserLocationAvailable) return null;

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
  }, [trendingLoading, isUserLocationAvailable, memoizedTrendingPandals, index]);

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
