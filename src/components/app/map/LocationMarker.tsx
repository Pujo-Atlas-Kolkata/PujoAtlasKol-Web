import { useCallback, memo, useEffect } from 'react';
import { cn } from '@/libs/utils';
import { AdvancedMarker, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { FaDirections } from 'react-icons/fa';
import type { LocationMarkerProps } from './types';
import { useMutation } from '@/hooks';
import axios from 'axios';
import { Api } from '@/constants';

const Header = ({ name }: Pick<LocationMarkerProps, 'name'>) => {
  return <h6 className="font-bold leading-tight text-sm">{name}</h6>;
};

const LocationMarker = ({
  id,
  name,
  address,
  lat,
  lng,
  activeMarkerId,
  setActiveMarkerId,
  setMarkerRef,
}: LocationMarkerProps) => {
  const handleMarkerClick = useCallback(() => {
    setActiveMarkerId(id);
  }, [id, setActiveMarkerId]);

  const { mutate: updateRanking } = useMutation({
    mutationFn: async () => {
      return axios.post(Api.Pujo.Searched, { ids: [id], term: 'navigate' });
    },
  });

  const handleGetDirectionsClick = useCallback(() => {
    updateRanking();
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    try {
      window.open(url, '_blank');
    } catch (error) {
      console.error('Failed to open directions URL:', error);
    }
  }, [lat, lng, updateRanking]);

  const [markerRef, marker] = useAdvancedMarkerRef();

  useEffect(() => {
    setMarkerRef(marker, id);
  }, [marker, id, setMarkerRef]);

  return (
    <AdvancedMarker position={{ lat, lng }} onClick={handleMarkerClick} ref={markerRef}>
      <Pin />
      {id === activeMarkerId && (
        <InfoWindow
          headerContent={<Header name={name} />}
          anchor={marker}
          onClose={() => setActiveMarkerId('')}
          className="flex flex-col pt-2 gap-2"
        >
          <span>{address}</span>
          <button
            onClick={handleGetDirectionsClick}
            className={cn(
              'py-1.5 px-3 w-full bg-black border-2 text-xs whitespace-nowrap',
              'font-sans font-bold rounded-full',
              'flex justify-center items-center',
            )}
          >
            <div className="flex flex-row-reverse justify-center items-center gap-x-1">
              <FaDirections className="h-4 w-4 animate-arrow-left-right fill-white" />
              <span className="!text-white font-work font-semibold text-sm">Navigate</span>
            </div>
          </button>
        </InfoWindow>
      )}
    </AdvancedMarker>
  );
};

export default memo(LocationMarker);
