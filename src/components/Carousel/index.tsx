import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/libs/utils';

type ButtonProps = {
  type: 'prev' | 'next';
  action: () => void;
  className?: string;
};

const ControlButton = ({ type, action, className = '' }: ButtonProps) => {
  return (
    <button
      title={type === 'prev' ? 'Previous' : 'Next'}
      type="button"
      onClick={() => action()}
      className={cn(
        'outline rounded-full hidden lg:grid place-items-center',
        'font-bold h-8 w-8 touch-manipulation transition-all duration-500',
        'bg-primary-background hover:bg-secondary-background',
        className,
      )}
    >
      {type === 'prev' && (
        <svg className="w-1/2 h-1/2" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
          />
        </svg>
      )}
      {type === 'next' && (
        <svg className="w-1/2 h-1/2" viewBox="0 0 532 532">
          <path
            fill="currentColor"
            d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
          />
        </svg>
      )}
    </button>
  );
};

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      breakpoints: {
        '(min-width: 0px)': { slidesToScroll: 1 },
        '(min-width: 768px)': { slidesToScroll: 3 },
        '(min-width: 1024px)': { slidesToScroll: 4 },
      },
    },
    [Autoplay()],
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const slideWidth = '[--slide-size:100%] md:[--slide-size:33.33333%] lg:[--slide-size:25%]';

  return (
    <section
      className={cn(
        slideWidth,
        '[--slide-spacing:0] lg:[--slide-spacing:2rem]',
        '[--slide-height:5rem] lg:[--slide-height:20rem]',
        'w-full mx-auto grid place-items-center relative',
      )}
    >
      <ControlButton
        type="prev"
        action={() => emblaApi?.scrollPrev()}
        className="absolute -left-12 top-1/2"
      />
      <ControlButton
        type="next"
        action={() => emblaApi?.scrollNext()}
        className="absolute -right-12 top-1/2"
      />

      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className={cn('flex touch-pinch-zoom touch-pan-y', 'ml-[calc(var(--slide-spacing)*-1)]')}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              className={cn(
                '[transform:translate3d(0,0,0)]',
                'pl-[var(--slide-spacing)] flex-[0_0_var(--slide-size)]',
              )}
              key={index}
            >
              <img
                className="overflow-hidden rounded-2xl h-96 w-full md:w-40 lg:w-72"
                src={`/idols/${index + 1}.webp`}
                alt={`Idol ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
