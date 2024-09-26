import { Drawer } from 'vaul';
import { useState, useEffect } from 'react';
import { Socials } from '@/constants';

export default function SettingsFlyout() {
  const [isOpen, setIsOpen] = useState(false);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleToggleFlyout = () => setIsOpen((prev) => !prev);
    document.addEventListener('toggleFlyout', handleToggleFlyout);
    return () => {
      document.removeEventListener('toggleFlyout', handleToggleFlyout);
    };
  }, []);

  return (
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
                <Drawer.Title className="text-base px-0 py-0">
                  <div className="rounded-full h-[6px] bg-[#8f7952] w-9 mb-3 mt-1 mx-auto"></div>
                  <div className="flex flex-row justify-between items-center px-3 py-0">
                    <div className="text-lg">Language</div>
                    <div className="flex items-center bg-inherit rounded-r-full p-1 w-fit text-base">
                      <button className="bg-[#c5b394] font-semibold text-white px-3 py-2 text-sm rounded-l-full transition-all">
                        English
                      </button>

                      <button
                        disabled
                        className="text-black px-3 py-2 font-semibold relative flex flex-col justify-center items-center"
                      >
                        <span className="font-noto pt-1 text-base">বাংলা</span>
                      </button>
                    </div>
                  </div>
                  <div className="pt-0.5 pr-2 text-right font-sans text-xs">
                    <span className="font-noto font-semibold">বাংলা</span>&nbsp;language support
                    coming soon!
                  </div>
                </Drawer.Title>

                <hr className="border-gray-950/10 border-[0.5px] mx-2" />

                <div className="flex flex-col items-start justify-center gap-y-0 px-3 py-1.5">
                  <div className="text-lg">Location Access</div>
                  <div className="text-xs">
                    This can be managed in the browser per-site settings
                  </div>
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
  );
}
