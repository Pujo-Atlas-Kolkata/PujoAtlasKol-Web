import { Drawer } from 'vaul';
import { useState, useEffect, useCallback } from 'react';
import { Socials } from '@/constants';
import { Toaster, toast } from 'sonner';
import { IoIosCheckmark, IoIosCloseCircleOutline } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import { MdErrorOutline } from 'react-icons/md';

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

  const handleLocationToggleToast = useCallback(() => {
    toast.custom(
      (t) => (
        <div className="flex flex-row justify-between items-center rounded-3xl p-2 text-black bg-white border-none font-semibold w-full">
          <div className="text-left pr-2">
            <MdErrorOutline size={22} />
          </div>
          <div className="flex-grow !font-sans !text-xs text-center">
            Update your browser&apos;s location settings.
          </div>
          <button onClick={() => toast.dismiss(t)} className="pl-2">
            <IoIosCloseCircleOutline size={25} />
          </button>
        </div>
      ),
      {
        duration: 3000,
        dismissible: true,
      },
    );
  }, []);

  return (
    <>
      <Toaster richColors position="top-center" />
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

                    <div className="flex items-center bg-inherit rounded-r-full text-base">
                      <button
                        onClick={() => handleLocationToggleToast()}
                        className={`${
                          locationStatus === 'on' ? 'bg-[#dddddd]' : 'bg-[#c5b394]'
                        } font-semibold text-white pl-2 pr-2 text-sm rounded-l-full transition-all w-fit flex items-center`}
                      >
                        <IoCloseOutline size={'22px'} />
                      </button>

                      <button
                        className={`${
                          locationStatus === 'on' ? 'bg-[#c5b394]' : 'bg-[#dddddd]'
                        } text-black pl-2 pr-2  font-semibold relative flex flex-col justify-center items-center rounded-r-full w-fit`}
                        onClick={() => handleLocationToggleToast()}
                      >
                        <IoIosCheckmark size={'30px'} />
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-right pr-2">
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
