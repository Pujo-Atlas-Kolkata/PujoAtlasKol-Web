import { cn } from '@/libs/utils';
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { useCallback } from 'react';
import { FaDirections } from 'react-icons/fa';

interface PandalMarkerProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  activePandalId: number | null;
  setActivePandalId: (id: number | null) => void;
}

export const PandalMarker = ({
  id,
  name,
  lat,
  lng,
  activePandalId,
  setActivePandalId,
}: PandalMarkerProps) => {
  const handleMarkerClick = useCallback(() => {
    setActivePandalId(id);
  }, [id, setActivePandalId]);

  const handleGetDirectionsClick = useCallback(() => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
  }, [lat, lng]);

  const showDirectionsButton = activePandalId === id;

  return (
    <AdvancedMarker position={{ lat, lng }} onClick={handleMarkerClick}>
      <div className="relative cursor-pointer">
        <img src="/pandal-map-marker.svg" alt="pandel marker" className="w-14 h-14" />
        {showDirectionsButton && (
          <>
            <div className="absolute left-12 top-3 font-sans rounded-3xl bg-black !text-white font-bold text-sm py-1.5 px-3 whitespace-nowrap">
              {name}
            </div>
            <div className="absolute left-12 top-10 mt-2 flex justify-center items-center">
              <button
                onClick={handleGetDirectionsClick}
                className={cn(
                  'py-1.5 px-3 bg-black border-2 text-sm whitespace-nowrap',
                  'font-sans font-bold rounded-full',
                  'flex justify-center items-center',
                )}
              >
                <div className="flex flex-row-reverse justify-center items-center gap-x-1">
                  <FaDirections className="h-4 w-4 animate-arrow-left-right fill-white" />
                  <span className="!text-white">Navigate</span>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </AdvancedMarker>
  );
};
