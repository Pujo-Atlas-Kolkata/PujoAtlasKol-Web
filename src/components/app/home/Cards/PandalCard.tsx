import { MdLocationPin, MdTimer } from 'react-icons/md';
import type { IconType } from 'react-icons';
import { PiMapPinAreaFill } from 'react-icons/pi';

interface PandalCardProps {
  cardTitleText: string;
  CardTitleIcon: IconType;
  cardTitleDistance?: number;
}

const PandalCard: React.FC<PandalCardProps> = ({ ...props }: PandalCardProps) => {
  return (
    <div id="nearme" className="rounded-3xl mb-2 p-2 pt-1 flex flex-col justify-start bg-[#e6dfcf]">
      <div className="mb-1 p-2 flex flex-row items-center justify-start">
        <props.CardTitleIcon size="25" fill="#171715" />
        <div className="pl-3">
          <p>Near Me</p>
        </div>
      </div>

      <div className="rounded-3xl p-6 flex flex-col justify-start bg-[#353435]">
        <div className="text-sm font-light">
          <p className="!text-[#DCDCDD] font-work font-normal text-xl">{props.cardTitleText}</p>
          <p className="!text-[#DCDCDD] leading-7">Pandal Address Placeholder</p>
          <div className="flex flex-row leading-6">
            <div className="m-0.5">
              <MdLocationPin fill="#DCDCDD" size="17" />
            </div>
            <p className="!text-[#DCDCDD] pl-1 flex-row">
              {props.cardTitleDistance?.toFixed(2)} KM
            </p>
          </div>
          <div className="flex flex-row leading-6">
            <div className="m-0.5">
              <PiMapPinAreaFill fill="#DCDCDD" size="17" />
            </div>
            <p className="!text-[#DCDCDD] pl-1 flex-row">CCU-S</p>
          </div>
          <div className="flex flex-row leading-6">
            <div className="m-0.5">
              <MdTimer fill="#DCDCDD" size="17" />
            </div>
            <p className="!text-[#DCDCDD] pl-1 flex-row">travel_time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PandalCard;
