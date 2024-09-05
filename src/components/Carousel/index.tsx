import Slider, { type Settings } from '@ant-design/react-slick';
import { cn } from '@/libs/utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

export const Carousel = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container rounded-3xl -translate-x-4">
      <Slider {...settings}>
        {Array.from({ length: 8 }).map((_, index) => {
          const bgUrl = `/idols/${index + 1}.jpg`;
          return (
            <div key={index} className="rounded-xl md:rounded-3xl overflow-hidden">
              <img
                src={bgUrl}
                className={cn(
                  'w-48 md:w-72 lg:w-96',
                  'h-48 md:h-72 lg:h-96',
                  'mx-auto max-w-72 max-h-96 select-none',
                  'rounded-xl md:rounded-3xl overflow-hidden outline-none border-none',
                )}
                key={index}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
