import { Drawer } from 'vaul';
import { useState, useEffect } from 'react';
import { Socials } from '@/constants';
import { Toaster, toast } from 'sonner';
import { IoIosCheckmark } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

export default function SettingsFlyout() {
  const [isOpen, setIsOpen] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [locationStatus, setLocationStatus] = useState('off');

  useEffect(() => {
    const handleToggleFlyout = () => setIsOpen((prev) => !prev);
    document.addEventListener('toggleFlyout', handleToggleFlyout);
    if (!isOpen) {
      const event = new CustomEvent('toggleFlyoutState');
      document.dispatchEvent(event);
    }
    return () => {
      document.removeEventListener('toggleFlyout', handleToggleFlyout);
    };
  }, [isOpen]);

  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
        updateLocationStatus(permissionStatus.state);
        permissionStatus.onchange = function () {
          updateLocationStatus(this.state);
        };
      });
    }
  }, []);

  const updateLocationStatus = (state: string) => {
    if (state === 'granted') {
      setLocationStatus('on');
    } else {
      setLocationStatus('off');
    }
  };

  return (
    <>
      <Toaster richColors />
      <div className="font-sans">
        {isOpen && (
          <div>
            <Drawer.Root open={isOpen} onOpenChange={setIsOpen} container={container}>
              <Drawer.Trigger asChild>
                <div />
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="inset-0 bg-opacity-70 z-20 m-2" />
                <Drawer.Content
                  className="drop-shadow-md top-[calc(100%-11.5rem)] fixed left-0 right-0 max-h-[40%] 
             bg-[#dddddd] p-1
             z-30 rounded-3xl
             mx-0
             mb-2
             h-[200%]
             max-w-[calc(100% - 1rem)]
             shadow-lg"
                >
                  <Drawer.Title className="text-base ">
                    <div className="rounded-full h-[6px] bg-[#4a4a4a] w-9 mb-3 mt-1 mx-auto"></div>
                    <div className="flex flex-row justify-between items-center m-2 w-full">
                      <div className="text-lg w-[50%]">Language</div>
                      <div className="flex items-center bg-inherit rounded-r-full pr-2 w-fit text-base">
                        <button className="bg-[#c5b394] font-semibold text-white px-3 py-2 text-sm rounded-l-full transition-all">
                          English
                        </button>

                        <button
                          disabled
                          className="text-black px-3 py-2 font-semibold relative flex flex-col justify-center items-center"
                        >
                          <span className="font-noto text-base">বাংলা</span>
                        </button>
                      </div>
                    </div>
                    <div className="pt-0.5 pr-2 text-right font-sans text-xs">
                      <span className="font-noto font-semibold">বাংলা</span>&nbsp;language support
                      coming soon!
                    </div>
                  </Drawer.Title>

                  <hr className="border-gray-950/10 border-[0.5px] mx-2" />

                  <div className="w-full flex items-center justify-between">
                    <div className="m-2">
                      <div className="text-lg">Location Access</div>
                    </div>

                    <div className="flex items-center bg-inherit  text-base pr-2">
                      <button
                        onClick={() =>
                          toast.warning(
                            `You can ${locationStatus === 'on' ? 'disable' : 'enable'} location settings from the browser`,
                          )
                        }
                        className={`font-semibold bg-[#c5b394] text-white pr-6 pl-6 text-sm rounded-3xl transition-all w-fit flex items-center`}
                      >
                        {locationStatus === 'on' ? (
                          <IoIosCheckmark size={'30px'} />
                        ) : (
                          <IoCloseOutline size={'30px'} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-center">
                    This can be managed in the browser per-site settings
                  </div>

                  <hr className="border-gray-950/10 border-[0.5px] mx-2" />

                  <div className="flex flex-row justify-center items-center text-xs py-2 mx-auto">
                    <span className="text-left">
                      Made with ❤️ by&nbsp;
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={Socials.GitHub}
                        className="font-semibold"
                      >
                        Pujo Atlas Kolkata
                      </a>
                    </span>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>

            <div ref={setContainer} />
          </div>
        )}
      </div>
    </>
  );
}
