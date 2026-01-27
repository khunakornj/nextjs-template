import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { DEFAULT_LOCALE, LOCALES } from './shared/common/constants';

const setLocale = new Set<string>(LOCALES);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // ========= Ensure Locale =========
  const segments = pathname.split('/');
  if (!setLocale.has(segments[1])) {
    segments[1] = DEFAULT_LOCALE;
    return NextResponse.redirect(new URL(segments.join('/'), request.url));
  }
  // ========= Ensure Locale =========
}
