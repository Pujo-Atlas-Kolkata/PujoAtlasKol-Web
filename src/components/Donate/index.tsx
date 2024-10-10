import { cn } from '@/libs/utils';
import { BsChevronExpand } from 'react-icons/bs';
import { useMemo, useState } from 'react';
import QRCode from 'react-qr-code';

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

const definedAmounts = ['50.00', '100.00', '200.00', '500.00', '1000.00'];
const MIN = '20.00';

const isGreaterThanMin = (value: string) => {
  return parseFloat(value) >= parseFloat(MIN);
};

export const Donate = () => {
  const [amount, setAmount] = useState(definedAmounts[0]);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const UPI = useMemo(() => {
    const details: UPIDetails = {
      pa: 'avimanyudas08-1@okicici',
      pn: 'Pujo Atlas',
      cu: 'INR',
      am: amount,
      tn: 'Donation to Pujo Atlas',
    };
    return createUPIUrl(details);
  }, [amount]);

  return (
    <section id="donation" className="flex flex-col gap-4">
      <h2 className="font-work font-semibold md-auto md:mr-auto text-2xl lg:text-4xl">
        Donate via UPI
      </h2>
      <QRCode
        value={UPI}
        fgColor="#332f28"
        bgColor="#ffedc9"
        className="p-2 outline outline-4 mx-auto size-40 lg:size-64"
      />
      <div
        className={cn(
          'font-medium flex gap-1 items-center relative',
          'w-40 lg:w-64 mx-auto p-2 rounded-lg',
          'outline outline-primary-foreground',
          'shadow-[2px_2px_0_2px] shadow-primary-foreground',
        )}
        role="combobox"
      >
        &#8377;
        <div className="w-fit max-w-20 lg:max-w-32 bg-transparent mr-auto">
          {isCustomAmount ? (
            <input
              type="numeric"
              autoFocus
              value={amount}
              onBlur={() => {
                if (amount.trim().length === 0 || !isGreaterThanMin(amount)) {
                  setAmount(MIN);
                }
              }}
              style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
              onChange={(e) => {
                const isValidNumber = /^[0-9]*\.?[0-9]*$/.test(e.target.value);
                if (!isValidNumber) return;
                setAmount(e.target.value);
              }}
              className="w-full bg-transparent outline-none placeholder-primary-foreground"
              placeholder={'20.00'}
            />
          ) : (
            <span>{amount}</span>
          )}
        </div>
        <ul
          data-active={openOptions}
          className={cn(
            'h-0 data-[active=true]:h-auto overflow-hidden mb-4',
            'absolute top-full translate-y-2 left-0 w-full',
            'bg-primary-background rounded-lg data-[active=true]:outline',
            'data-[active=true]:shadow-[2px_2px_0_2px] shadow-black',
          )}
        >
          {definedAmounts.map((amt) => (
            <li
              key={amt}
              role="option"
              data-selected={amt === amount}
              className={cn(
                'cursor-pointer p-2 flex gap-1 group',
                'data-[selected=true]:bg-primary-foreground data-[selected=true]:!text-white',
              )}
              onClick={() => {
                setAmount(amt);
                setIsCustomAmount(false);
                setOpenOptions(false);
              }}
            >
              &#8377; <span className="group-data-[selected=true]:!text-white">{amt}</span>
            </li>
          ))}
          <li
            role="option"
            data-selected={isCustomAmount && !definedAmounts.includes(amount)}
            className={cn(
              'cursor-pointer p-2 flex gap-1 group',
              'data-[selected=true]:bg-primary-foreground data-[selected=true]:!text-white',
            )}
            onClick={() => {
              setAmount(definedAmounts[0]);
              setIsCustomAmount(true);
              setOpenOptions(false);
            }}
          >
            Custom Amount
          </li>
        </ul>
        <BsChevronExpand
          role="button"
          onClick={() => {
            setOpenOptions(!openOptions);
          }}
        />
      </div>
      <a
        className={cn(
          'md:hidden p-2 w-40 mx-auto text-center rounded-lg',
          'font-work bg-black !text-white font-medium outline outline-4 outline-black',
        )}
        href={UPI}
        target="_blank"
        rel="noreferrer"
      >
        Donate &#8377; {amount}
      </a>
      <span className="text-center font-work font-medium hidden md:inline">
        Scan the QR to donate &#8377;
        {amount.length && isGreaterThanMin(amount) ? amount : MIN}
      </span>
    </section>
  );
};
