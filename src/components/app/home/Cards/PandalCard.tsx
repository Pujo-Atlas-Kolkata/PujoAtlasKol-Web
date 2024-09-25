import { MdLocationPin } from 'react-icons/md';
import type { IconType } from 'react-icons';
import { PiMapPinAreaFill } from 'react-icons/pi';
import { BiSolidCity } from 'react-icons/bi';

interface PandalCardProps {
  cardTitleText: string;
  cardIcon: IconType;
  cardDistance?: number;
  cardAddress: string;
  cardZone: string;
  cardCity: string;
}

const PandalCard: React.FC<PandalCardProps> = ({ ...props }: PandalCardProps) => {
  return (
    <div id="nearme" className="rounded-3xl mb-2 p-2 pt-1 flex flex-col justify-start">
      <div className="rounded-3xl p-6 flex flex-col justify-start bg-[#353435]">
        <div className="text-sm font-light">
          <p className="!text-[#DCDCDD] font-work font-normal text-xl">{props.cardTitleText}</p>
          <p className="!text-[#DCDCDD] leading-7">{props.cardAddress}</p>
          <div className="flex flex-row leading-6">
            <div className="m-0.5">
              <MdLocationPin fill="#DCDCDD" size="17" />
            </div>
            <p className="!text-[#DCDCDD] pl-1 flex-row">{props.cardDistance?.toFixed(2)} KM</p>
          </div>
          <div className="flex flex-row leading-6">
            <div className="m-0.5">
              <PiMapPinAreaFill fill="#DCDCDD" size="17" />
            </div>
            <p className="!text-[#DCDCDD] pl-1 flex-row">{props.cardZone}</p>
          </div>
          <div className="flex flex-row leading-6">
            <div className="m-0.5">
              <BiSolidCity fill="#DCDCDD" size="17" />
            </div>
            <p className="!text-[#DCDCDD] pl-1 flex-row">{props.cardCity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PandalCard;
