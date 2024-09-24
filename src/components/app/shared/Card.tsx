import { useState } from 'react';
import PandalCard from './PandalCard';
import { TbLocationFilled } from 'react-icons/tb';
import { IoMdTrendingUp } from 'react-icons/io';

const Card = () => {
  const [activeCard, setActiveCard] = useState('trending');
  return (
    <>
      <div className="flex flex-row gap-2">
        <button
          className={`p-2 px-3 font-work rounded-full bg-[${activeCard === 'trending' ? '#fff' : '#e6dfcf'}]`}
          onClick={() => (activeCard !== 'nearme' ? setActiveCard('nearme') : null)}
        >
          Near Me
        </button>
        <button
          className={`p-2 px-3 font-work rounded-full bg-[${activeCard === 'trending' ? '#e6dfcf' : '#fff'}]`}
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

export default Card;
