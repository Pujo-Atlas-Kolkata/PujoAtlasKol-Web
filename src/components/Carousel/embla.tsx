import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './embla.css';
import { cn } from '@/libs/utils';

type Props = {
  slidesToShow?: number;
};

export const EmblaCarousel = ({ slidesToShow = 4 }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: slidesToShow }, [
    Autoplay(),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const slideWidth = {
    '[--slide-size:100%] md:[--slide-size:33.333333%] lg:[--slide-size:25%]': slidesToShow === 4,
    '[--slide-size:100%] md:[--slide-size:33.3333%]': slidesToShow === 3,
    '[--slide-size:100%] [--slide-size:50%]': slidesToShow === 2,
    '[--slide-size:100%]': slidesToShow === 1,
  };

  return (
    <section
      className={cn(
        slideWidth,
        '[--slide-spacing:2rem]',
        '[--slide-height:20rem]',
        'w-full max-w-7xl mx-auto',
      )}
    >
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
              <div className="embla__slide__number">
                <img
                  className="overflow-hidden rounded-xl h-96 w-72"
                  height={400}
                  src={`/idols/${index + 1}.jpg`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
