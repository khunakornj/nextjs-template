import { useParams } from 'next/navigation';

import L from '@/i18n/i18n-node';
import { Locales } from '@/i18n/i18n-types';

export function useLocale() {
  const params = useParams();
  const locale = params.locale as Locales;

  return L[locale];
}
