import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentLanguage = (path: string): 'en' | 'bn' => {
  return path.startsWith('/bn') ? 'bn' : 'en';
};

export const getAlternateLanguage = (lang: 'en' | 'bn'): 'en' | 'bn' => {
  return lang === 'en' ? 'bn' : 'en';
};

export const getAlternateLanguagePath = (currentPath: string): string => {
  const isBengaliPath = currentPath.startsWith('/bn');

  // For Bengali URLs, remove '/bn' prefix
  if (isBengaliPath) {
    const newPath = currentPath.slice(3);
    return newPath === '' ? '/' : newPath;
  }

  // For English URLs, add '/bn' prefix
  const newPath = currentPath === '/' ? '/bn' : `/bn${currentPath}`;
  return newPath;
};

// utility object to convert time units to number
export const time = {
  milliseconds: (value: number) => value,
  seconds: (value: number) => value * 1000,
  minutes: (value: number) => value * 1000 * 60,
  hours: (value: number) => value * 1000 * 60 * 60,
  days: (value: number) => value * 1000 * 60 * 60 * 24,
  weeks: (value: number) => value * 1000 * 60 * 60 * 24 * 7,
  months: (value: number) => value * 1000 * 60 * 60 * 24 * 30,
  years: (value: number) => value * 1000 * 60 * 60 * 24 * 365,
} as const;

type StorageData<Data> = {
  value: Data;
  expiry: number | null;
};

export const cacheStore = {
  get: <Data>(key: string): Data | null => {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    const { value, expiry } = JSON.parse(data) as StorageData<Data>;

    const hasExpired = expiry !== null && Date.now() > expiry;

    if (hasExpired) {
      localStorage.removeItem(key);
      return null;
    }
    return value;
  },
  set: (key: string, value: unknown, expiry: number) => {
    const data: StorageData<unknown> = {
      value,
      expiry: Date.now() + expiry,
    };
    localStorage.setItem(key, JSON.stringify(data));
  },
  delete: (key: string) => {
    localStorage.removeItem(key);
  },
  deleteAll: () => {
    localStorage.clear();
  },
} as const;

export const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371; // Earth's radius in kilometers

  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
};
