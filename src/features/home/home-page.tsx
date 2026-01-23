'use client';

import './home-page.scss';

import { useLang } from '@/shared/hooks/use-lang';

function HomePage() {
  const t = useLang();

  return (
    <div className="Home__root">
      <h1 className="Home__root__h1">{t.HI({ name: 'Robert' })}</h1>
    </div>
  );
}

export default HomePage;
