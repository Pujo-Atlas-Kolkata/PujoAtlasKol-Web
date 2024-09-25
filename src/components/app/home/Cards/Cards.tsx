import { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { TbLocationFilled } from 'react-icons/tb';
import { IoMdTrendingUp } from 'react-icons/io';
import { cn, getDistance } from '@/libs/utils';
import type { Location } from '../../map/types';
import PandalCard from './PandalCard';
import { FETCH_ALL_PANDALS } from '@/constants/location';
import { useQuery } from '@/hooks';
import { CgSpinner } from 'react-icons/cg';

type Result = {
  result: Location[];
};

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

  const fetchPandals = async () => {
    const response = await fetch(FETCH_ALL_PANDALS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const {
    data: pandals,
    isLoading,
    isError,
  } = useQuery<Result>({
    queryKey: ['pandals'],
    queryFn: fetchPandals,
  });

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
    if (!userLocation || !pandals?.result) return [];

    const distances = pandals.result.map((pandal: Location) => ({
      ...pandal,
      distance: getDistance(userLocation.latitude, userLocation.longitude, pandal.lat, pandal.lon),
    }));

    return distances.sort((a, b) => a.distance - b.distance).slice(0, 10);
  }, [userLocation, pandals?.result]);

  const handleNearMeClick = useCallback(() => {
    if (activeCard !== 'nearme') {
      setActiveCard('nearme');
    }
  }, [activeCard]);

  const handleTrendingClick = useCallback(() => {
    if (activeCard !== 'trending') {
      setActiveCard('trending');
    }
  }, [activeCard]);

  const content = useMemo(() => {
    if (isLoading || isError) return null;

    if (activeCard === 'nearme' && memoizedClosestPandals.length > 0) {
      return (
        <div className="z-10">
          <div className="mb-1 p-2 flex flex-row items-center justify-start">
            <TbLocationFilled size="24" fill="#171715" />
            <div className="pl-3">
              <p>Near Me</p>
            </div>
          </div>
          <div className="rounded-t-[1.075rem] flex-1 overflow-y-auto max-h-[calc(100dvh-16rem)] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
            {memoizedClosestPandals.map((pandal) => (
              <PandalCard
                key={pandal.id}
                cardTitleText={pandal.name}
                cardDistance={pandal.distance}
                cardAddress={pandal.address}
                cardZone={pandal.zone}
                cardCity={pandal.city}
              />
            ))}
          </div>
        </div>
      );
    }

    if (activeCard === 'trending') {
      return (
        <div className="z-10">
          <div className="mb-1 p-2 flex flex-row items-center justify-start">
            <IoMdTrendingUp size="24" fill="#171715" />
            <div className="pl-3">
              <p>Trending</p>
            </div>
          </div>
          <div className="rounded-3xl flex-1 overflow-y-auto max-h-[calc(100dvh-16rem)] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
            <PandalCard
              cardTitleText="Trending"
              cardAddress="foobar"
              cardCity="Kolkata"
              cardZone="CCU-S"
              cardDistance={0}
            />
          </div>
        </div>
      );
    }

    return null;
  }, [isLoading, isError, activeCard, memoizedClosestPandals]);

  return (
    <>
      {isLoading && (
        <div className="fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
          <CgSpinner size={60} className="animate-spin" />
        </div>
      )}
      {isError && (
        <div className="whitespace-nowrap font-work leading-tight text-sm !text-red-600 rounded-lg drop-shadow-sm text-left p-4 bg-primary-background fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
          Something went wrong.
          <br />
          Please try again later!
        </div>
      )}
      <div className="flex flex-row gap-2 px-2">
        <button
          disabled={!isUserLocationAvailable}
          className={cn(
            activeCard === 'nearme' ? 'bg-[#fff]' : 'bg-[#e6dfcf]',
            'p-2 px-3 font-sans rounded-full',
            !isUserLocationAvailable && 'bg-inherit',
          )}
          onClick={handleNearMeClick}
        >
          Near Me
        </button>
        <button
          className={cn(
            activeCard === 'trending' ? 'bg-[#fff]' : 'bg-[#e6dfcf]',
            'p-2 px-3 font-sans rounded-full',
          )}
          onClick={handleTrendingClick}
        >
          Trending
        </button>
      </div>
      {content}
    </>
  );
};

export default memo(Cards);
