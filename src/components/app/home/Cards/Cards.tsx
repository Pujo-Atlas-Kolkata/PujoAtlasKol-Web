import { useEffect, useState } from 'react';
import { TbLocationFilled } from 'react-icons/tb';
import { IoMdTrendingUp } from 'react-icons/io';
import { cn, getDistance } from '@/libs/utils';
import type { Location } from '../../map/types';
import PandalCard from './PandalCard';

interface CardsProps {
  pandals: Location[];
}

const Cards = ({ pandals }: CardsProps) => {
  const [activeCard, setActiveCard] = useState<'trending' | 'nearme'>('trending');
  const [isUserLocationAvailable, setIsUserLocationAvailable] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(
    null,
  );
  const [closestPandals, setClosestPandals] = useState<Location[]>([]);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });
            setActiveCard('nearme');
            setIsUserLocationAvailable(true);
          },
          (error) => {
            console.error('Error getting location:', error);
            setActiveCard('trending');
            setIsUserLocationAvailable(false);
          },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setActiveCard('trending');
        setIsUserLocationAvailable(false);
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      const distances = pandals.map((pandal) => ({
        ...pandal,
        distance: getDistance(
          userLocation.latitude,
          userLocation.longitude,
          pandal.lat,
          pandal.lon,
        ),
      }));

      // Sort pandals by distance and get the 5 closest
      const sortedPandals = distances.sort((a, b) => a.distance - b.distance).slice(0, 10);
      setClosestPandals(sortedPandals);
    }
  }, [pandals, userLocation]);

  return (
    <>
      <div className="flex flex-row gap-2 px-2">
        <button
          disabled={!isUserLocationAvailable}
          className={cn(
            activeCard === 'trending' ? 'bg-[#e6dfcf]' : 'bg-[#fff]',
            'p-2 px-3 font-sans rounded-full',
          )}
          onClick={() => (activeCard !== 'nearme' ? setActiveCard('nearme') : null)}
        >
          Near Me
        </button>
        <button
          className={cn(
            activeCard === 'trending' ? 'bg-[#fff]' : 'bg-[#e6dfcf]',
            'p-2 px-3 font-sans rounded-full',
          )}
          onClick={() => (activeCard !== 'trending' ? setActiveCard('trending') : null)}
        >
          Trending
        </button>
      </div>
      {activeCard === 'nearme' && closestPandals.length > 0 && (
        <div className="z-10">
          <div className="mb-1 p-2 flex flex-row items-center justify-start">
            <TbLocationFilled size="24" fill="#171715" />
            <div className="pl-3">
              <p>Near Me</p>
            </div>
          </div>
          <div className="rounded-3xl flex-1 overflow-y-auto max-h-[calc(100dvh-16rem)] [&_*::-webkit-scrollbar]:hidden [&::-webkit-scrollbar]:hidden">
            {closestPandals.map((pandal) => (
              <PandalCard
                key={pandal.id}
                cardTitleText={pandal.name}
                cardIcon={TbLocationFilled}
                cardDistance={pandal.distance}
                cardAddress={pandal.address}
                cardZone={pandal.zone}
                cardCity={pandal.city}
              />
            ))}
          </div>
        </div>
      )}
      {activeCard === 'trending' && (
        <PandalCard
          cardTitleText="Trending"
          cardIcon={IoMdTrendingUp}
          cardAddress="foobar"
          cardCity="Kolkata"
          cardZone="CCU-S"
          cardDistance={0}
        />
      )}
    </>
  );
};

export default Cards;
