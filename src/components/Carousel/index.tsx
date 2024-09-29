import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/libs/utils';
import { ControlButton } from './buttons';
import Cards from './Cards';

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 0,
      slidesToScroll: 1,
      // breakpoints: {
      //   '(min-width: 0px)': { slidesToScroll: 1 },
      //   '(min-width: 768px)': { slidesToScroll: 2 },
      //   '(min-width: 1024px)': { slidesToScroll: 4 },
      //   '(min-width: 1440px)': { slidesToScroll: 5 },
      // },
    },
    [Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })],
  );

  const slideWidth = cn(
    '[--slide-size:100%]',
    'md:[--slide-size:40%]',
    'lg:[--slide-size:25%]',
    'xl:[--slide-size:20%]',
  );

  return (
    <section
      className={cn(
        slideWidth,
        '[--slide-spacing:0] md:[--slide-spacing:0rem] lg:[--slide-spacing:0rem]',
        '[--slide-height:5rem] 2xl:[--slide-height:28rem] rounded-3xl',
        'w-full mx-auto grid place-items-center relative my-2',
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
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <div
                className={cn(
                  '[transform:translate3d(0,0,0)] flex justify-center',
                  'md:pl-[var(--slide-spacing)] flex-[0_0_var(--slide-size)]',
                  '-mx-1',
                )}
                key={index}
              >
                <Cards index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
