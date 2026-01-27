'use client';

import './home-page.scss';

import { useLocale } from '@/shared/hooks/use-locale';

function HomePage() {
  const t = useLocale();

  return (
    <div className="Home__root">
      <h1 className="Home__root__h1">{t.HI({ name: 'Robert' })}</h1>
    </div>
  );
}

export default HomePage;
