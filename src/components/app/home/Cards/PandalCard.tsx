import { memo, useMemo } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { BiSolidCity } from 'react-icons/bi';

interface PandalCardProps {
  cardTitleText: string;
  cardDistance?: number;
  cardAddress: string;
  cardZone: string;
  cardCity: string;
}

const PandalCard: React.FC<PandalCardProps> = ({
  cardTitleText,
  cardDistance,
  cardAddress,
  cardZone,
  cardCity,
}: PandalCardProps) => {
  const formattedDistance = useMemo(
    () => (cardDistance ? `${cardDistance.toFixed(2)} KM` : undefined),
    [cardDistance],
  );

  return (
    <div id="nearme" className="rounded-3xl mb-2 p-2 pt-1 flex flex-col justify-start">
      <div className="rounded-3xl p-6 flex flex-col justify-start bg-[#353435]">
        <div className="text-sm font-light">
          <p className="!text-[#DCDCDD] font-work font-normal text-xl">{cardTitleText}</p>
          <p className="!text-[#DCDCDD] leading-7">{cardAddress}</p>
          {formattedDistance && (
            <div className="flex flex-row leading-6">
              <MdLocationPin fill="#DCDCDD" size="17" className="m-0.5" />
              <p className="!text-[#DCDCDD] pl-1 flex-row">{formattedDistance}</p>
            </div>
          )}
          <div className="flex flex-row leading-6">
            <PiMapPinAreaFill fill="#DCDCDD" size="17" className="m-0.5" />
            <p className="!text-[#DCDCDD] pl-1 flex-row">{cardZone}</p>
          </div>
          <div className="flex flex-row leading-6">
            <BiSolidCity fill="#DCDCDD" size="17" className="m-0.5" />
            <p className="!text-[#DCDCDD] pl-1 flex-row">{cardCity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PandalCard);
