import { cn } from '@/libs/utils';
import { useMemo, useState } from 'react';
import QRCode from 'react-qr-code';
import { Socials } from '@/constants';

type UPIDetails = {
  pa: string;
  pn: string;
  cu: string;
  am: string;
  tn: string;
};

const createUPIUrl = (details: UPIDetails) => {
  const params = Object.entries(details).map(([key, value]: [string, string]) => {
    const encodedValue = value.split(' ').join('%20');
    return `&${key}=${encodedValue}`;
  });
  return `upi://pay?${params.join('')}`;
};

const definedAmounts = ['50', '100', '200', '500', '1000', '2000'];
const MIN = '20';
const MAX = '100000';

const isGreaterThanMin = (value: string) => {
  return parseInt(value) >= parseInt(MIN);
};

const isLessThanMax = (value: string) => {
  return parseInt(value) <= parseInt(MAX);
};

type Props = {
  id: string;
};

export const Donate = ({ id }: Props) => {
  const [amount, setAmount] = useState(definedAmounts[0]);
  const [isCustomAmount, setCustomAmount] = useState(false);

  const validAmount = useMemo(() => {
    return amount.length && isGreaterThanMin(amount) ? (isLessThanMax(amount) ? amount : MAX) : MIN;
  }, [amount]);

  const UPI = useMemo(() => {
    const details: UPIDetails = {
      pa: id,
      pn: 'Pujo Atlas',
      cu: 'INR',
      am: validAmount,
      tn: 'Donation to Pujo Atlas',
    };
    return createUPIUrl(details);
  }, [validAmount, id]);

  return (
    <section id="donation" className="flex flex-col items-center lg:items-start gap-12">
      <h2 className="font-work font-semibold w-fit text-2xl lg:text-4xl">Donate via UPI</h2>
      <div className="flex flex-col items-center justify-evenly lg:flex-row gap-4 lg:gap-12">
        <QRCode
          value={UPI}
          fgColor="#332f28"
          bgColor="#ffedc9"
          level="L"
          className="p-1 outline outline-4 w-fit rounded-xl size-64 lg:size-64"
        />
        <div className="flex flex-col gap-4 lg:h-full">
          <div className="w-64 mx-auto grid grid-cols-3 gap-4">
            {definedAmounts.map((amt) => (
              <button
                key={amt}
                data-active={amt === validAmount}
                className={cn(
                  'font-medium flex gap-1 items-center relative',
                  'p-2 rounded-lg data-[active=true]:bg-secondary-background',
                  'outline outline-primary-foreground',
                  'shadow-[2px_2px_0_2px] shadow-primary-foreground',
                )}
                onClick={() => {
                  setAmount(amt);
                  setCustomAmount(false);
                }}
              >
                &#8377; {amt}
              </button>
            ))}
            <button
              data-active={isCustomAmount}
              className={cn(
                'font-medium flex gap-1 items-center relative',
                'p-2 rounded-lg data-[active=true]:bg-secondary-background',
                'outline outline-primary-foreground',
                'shadow-[2px_2px_0_2px] shadow-primary-foreground',
              )}
              onClick={() => setCustomAmount((prev) => !prev)}
            >
              Custom
            </button>
            {isCustomAmount && (
              <input
                type="number"
                min={MIN}
                max={MAX}
                value={amount}
                placeholder={MIN}
                onChange={(e) => {
                  // regex to only allow numbers without decimal or negative sign
                  const isNumber = /^[0-9]+$/.test(e.target.value);

                  if (isNumber || e.target.value === '') {
                    setAmount(e.target.value);
                  }
                }}
                onBlur={() => setAmount(validAmount)}
                className={cn(
                  'p-2 rounded-lg col-span-2 text-left font-semibold placeholder-primary-foreground',
                  'outline outline-primary-foreground shadow-[2px_2px_0_2px] shadow-primary-foreground',
                )}
              />
            )}
          </div>
          <a
            className={cn(
              'md:hidden p-2 w-full mx-auto text-center rounded-lg',
              'font-work bg-black !text-white font-medium outline outline-4 outline-black',
            )}
            href={UPI}
            target="_blank"
            rel="noreferrer"
          >
            Donate &#8377; {validAmount}
          </a>
          <span className="text-left font-work font-medium hidden md:inline mt-auto">
            Scan the QR to donate &#8377; {validAmount}
          </span>
        </div>
      </div>
      <p className="text-justify">
        More donation options will be available soon! For any doubts or queries regarding donating
        to Pujo Atlas, please enquire in our{' '}
        <a
          href={Socials.Discord}
          target="_blank"
          rel="noreferrer"
          className="font-semibold font-work border-b-2 border-dashed border-black"
        >
          Discord Server
        </a>
        .
      </p>
    </section>
  );
};
