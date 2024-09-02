import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines the current language based on the given path.
 *
 * @param {string} path - The URL path to check.
 * @returns {'en' | 'bn'} The current language, either 'en' (English) or 'bn' (Bengali).
 */
export const getCurrentLanguage = (path: string): 'en' | 'bn' => {
  return path.startsWith('/bn') ? 'bn' : 'en';
};

/**
 * Returns the alternate language based on the given language.
 *
 * @param {'en' | 'bn'} lang - The current language.
 * @returns {'en' | 'bn'} The alternate language.
 */
export const getAlternateLanguage = (lang: 'en' | 'bn'): 'en' | 'bn' => {
  return lang === 'en' ? 'bn' : 'en';
};

/**
 * Generates the path for the alternate language based on the current path.
 *
 * @param {string} path - The current URL path.
 * @returns {'/' | '/bn'} The path for the alternate language.
 */
export const getAlternateLanguagePath = (path: string): '/' | '/bn' => {
  const currentLang = getCurrentLanguage(path);
  const alternateLanguage = getAlternateLanguage(currentLang);
  return alternateLanguage === 'en' ? '/' : '/bn';
};
