import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/libs/utils';
import { ControlButton } from './buttons';

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
        className="absolute -right-10 top-1/2"
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
