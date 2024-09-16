import { APIProvider, ControlPosition, Map, MapControl } from '@vis.gl/react-google-maps';

type Props = {
  apiKey: string;
};

export const MapComponent = ({ apiKey }: Props) => (
  <APIProvider apiKey={apiKey}>
    <Map
      style={{ width: 'auto', height: '500px' }}
      defaultCenter={{ lat: 22.4747061, lng: 88.3642162 }}
      defaultZoom={15}
      gestureHandling={'greedy'}
      disableDefaultUI={false}
    >
      <MapControl position={ControlPosition.TOP_LEFT} />
    </Map>
  </APIProvider>
);
