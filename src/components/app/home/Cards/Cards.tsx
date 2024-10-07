import { useEffect, useState, useMemo, useCallback } from 'react';
import { TbLocationFilled } from 'react-icons/tb';
import { IoMdTrendingUp } from 'react-icons/io';
import { cn, getDistance } from '@/libs/utils';
import type { Pandal } from '@/types';
import PandalCard from './PandalCard';
import { useAllPandals, useTrendingPandals } from '@/hooks';
import { CgSpinner } from 'react-icons/cg';
import { Toaster, toast } from 'sonner';

const Cards = () => {
  const [activeCard, setActiveCard] = useState<'trending' | 'nearme'>('trending');
  const [isUserLocationAvailable, setIsUserLocationAvailable] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(
    null,
  );

  const handleError: PositionErrorCallback = useCallback((error) => {
    console.error('Error:', error);
    setActiveCard('trending');
    setIsUserLocationAvailable(false);
  }, []);

  const { data: pandalsData, isLoading: pandalsLoading, isError: pandalsError } = useAllPandals();

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
          setActiveCard('nearme');
          setIsUserLocationAvailable(true);
        }, handleError);
      } else {
        console.error('Geolocation is not supported by this browser.');
        setActiveCard('trending');
        setIsUserLocationAvailable(false);
      }
    };

    getLocation();
  }, [handleError]);

  const memoizedClosestPandals = useMemo(() => {
    if (!userLocation || !pandalsData?.result) return [];

    const distances = pandalsData.result.map((pandal: Pandal) => ({
      ...pandal,
      distance: getDistance(userLocation.latitude, userLocation.longitude, pandal.lat, pandal.lon),
    }));

    return distances.sort((a, b) => a.distance - b.distance).slice(0, 10);
  }, [userLocation, pandalsData?.result]);

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

  const handleNearMeClick = useCallback(() => {
    if (!isUserLocationAvailable) {
      toast.error('Please enable location permission.', {
        className: 'rounded-[16px] p-4 text-[#353435] bg-[#e0d9cb] border-none',
        duration: 5000,
        description: (
          <button
            onClick={() => toast.dismiss()}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Dismiss
          </button>
        ),
      });
    }

    if (isUserLocationAvailable && activeCard !== 'nearme') {
      setActiveCard('nearme');
    }
  }, [activeCard, isUserLocationAvailable]);

  const handleTrendingClick = useCallback(() => {
    if (activeCard !== 'trending') {
      setActiveCard('trending');
    }
  }, [activeCard]);

  const content = useMemo(() => {
    if ((pandalsLoading || trendingLoading) && !isUserLocationAvailable) return null;

    if (activeCard === 'nearme' && memoizedClosestPandals.length > 0) {
      return (
        <div className="z-10">
          <div className="rounded-3xl rounded-b-none flex-1 overflow-y-auto max-h-[calc(100dvh-16rem)] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
            {memoizedClosestPandals.map((pandal) => (
              <PandalCard
                key={pandal.id}
                id={pandal.id}
                cardTitleText={pandal.name}
                cardDistance={pandal.distance}
                cardAddress={pandal.address}
                cardZone={pandal.zone}
                cardCity={pandal.city}
                lat={pandal.lat}
                lon={pandal.lon}
              />
            ))}
          </div>
        </div>
      );
    }

    if (activeCard === 'trending' && memoizedTrendingPandals.length > 0) {
      return (
        <div className="z-10">
          <div className="rounded-3xl rounded-b-none flex-1 overflow-y-auto max-h-[calc(100dvh-16rem)] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
            {memoizedTrendingPandals.map((pandal) => (
              <PandalCard
                key={pandal.id}
                id={pandal.id}
                cardTitleText={pandal.name}
                cardDistance={pandal.distance}
                cardAddress={pandal.address}
                cardCity={pandal.city}
                cardZone={pandal.zone}
                lat={pandal.lat}
                lon={pandal.lon}
              />
            ))}
          </div>
        </div>
      );
    }

    return null;
  }, [
    pandalsLoading,
    trendingLoading,
    isUserLocationAvailable,
    activeCard,
    memoizedClosestPandals,
    memoizedTrendingPandals,
  ]);

  return (
    <>
      {(pandalsLoading || trendingLoading) && (
        <div className="fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
          <CgSpinner size={60} className="animate-spin" />
        </div>
      )}
      {(pandalsError || trendingError) && (
        <div className="whitespace-nowrap font-work leading-tight text-sm !text-red-600 rounded-lg drop-shadow-sm text-left p-4 bg-primary-background fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
          Something went wrong.
          <br />
          Please try again later!
        </div>
      )}
      <div className="flex flex-row gap-2 px-2">
        <button
          className={cn(
            activeCard === 'nearme' ? 'bg-[#fff]' : 'bg-[#e6dfcf]',
            'p-2 px-3 font-sans rounded-full',
            'flex gap-1.5',
            !isUserLocationAvailable && 'bg-inherit',
          )}
          onClick={handleNearMeClick}
        >
          <TbLocationFilled size="24" fill="#171715" />
          Near Me
        </button>
        <button
          className={cn(
            activeCard === 'trending' ? 'bg-[#fff]' : 'bg-[#e6dfcf]',
            'p-2 px-3 font-sans rounded-full',
            'flex gap-1.5',
          )}
          onClick={handleTrendingClick}
        >
          <IoMdTrendingUp className="animate-pulse" size="24" fill="#171715" />
          Trending
        </button>
      </div>
      {content}
      <Toaster />
    </>
  );
};

export default Cards;
