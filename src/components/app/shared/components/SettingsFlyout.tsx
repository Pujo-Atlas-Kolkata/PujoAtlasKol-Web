// import { useStore } from '@nanostores/react';
// import { isSettingsOpen } from './settingStore';

import { Drawer } from 'vaul';
import { useState, useEffect } from 'react';

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
        <div className="rounded-xl">
          <Drawer.Root open={isOpen} onOpenChange={setIsOpen} container={container}>
            <Drawer.Trigger asChild>
              <div />
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="inset-0 bg-opacity-70 z-20 p-4 m-2 rounded-lg" />
              <Drawer.Content
                className="fixed bottom-0 left-0 right-0 max-h-[70%] 
             bg-[#eae5d9] p-4
             sm:p-2 z-30 rounded-t-lg
             mx-4
             mb-16
             max-w-[calc(100% - 1rem)]
             shadow-lg"
              >
                <Drawer.Title className="text-lg font-semibold">
                  <div className="flex justify-between items-center space-x-1">
                    <span className="sm:text-xl">Language</span>
                    <div className="flex items-center bg-[#ebe5d9] rounded-r-full p-1 w-fit">
                      <button className="bg-[#c5b394] text-white px-4 py-2 rounded-l-full transition-all font-bold">
                        English
                      </button>
                      {/* This button is disabled for now the language change will happen soon */}
                      <button disabled className="text-black px-4 py-2 font-bold">
                        বাংলা
                      </button>
                    </div>
                  </div>
                </Drawer.Title>
                <hr className="my-2 border-t-2 border-gray-300" />

                <div className="">
                  <p className="text-lg">Location Access</p>
                  <p className="py-2">This can be managed in the browser per-site settings</p>
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
