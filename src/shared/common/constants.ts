import { Locales } from '@/i18n/i18n-types';

import { UnionArray } from './types';

export const META_INVALIDATE_QUERY_KEY = 'invalidatesQuery';

export const DEFAULT_LOCALE: Locales = 'en';
export const LOCALES: UnionArray<Locales> = ['en', 'th'] as const;
