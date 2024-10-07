export type Metro = {
  lat: number;
  lon: number;
  name: string;
  station_code: string;
  line: string[];
  distance: number;
  distance_unit: string;
};

export type Pandal = {
  id: string;
  name: string;
  city: string;
  address: string;
  lat: number;
  lon: number;
  zone: string;
  distance?: number;
  metro: Metro;
};
