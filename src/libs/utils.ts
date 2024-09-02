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
