import { useEffect, useState } from 'react';
import PandalCard from './PandalCard';
import { TbLocationFilled } from 'react-icons/tb';
import { IoMdTrendingUp } from 'react-icons/io';
import { cn } from '@/libs/utils';
import { pandals } from '@/pages/app/pandals.astro';

const Cards = () => {
  console.log('pandals=', pandals);

  const [activeCard, setActiveCard] = useState<'trending' | 'nearme'>('trending');

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setActiveCard('nearme');

            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            setActiveCard('trending');
          },
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setActiveCard('trending');
      }
    };

    getLocation();
  }, []);

  return (
    <>
      <div className="flex flex-row gap-2">
        <button
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
      {activeCard === 'nearme' && (
        <PandalCard cardTitleText="Near Me" CardTitleIcon={TbLocationFilled} />
      )}
      {activeCard === 'trending' && (
        <PandalCard cardTitleText="Trending" CardTitleIcon={IoMdTrendingUp} />
      )}
    </>
  );
};

export default Cards;
