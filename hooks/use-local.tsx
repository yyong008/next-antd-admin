'use client';

import { useEffect, useState } from 'react';

import { getDictionary } from '@/app/utils/locales';
import { translate } from '@/app/utils';
import { useParams } from 'next/navigation';

export function useLocals() {
  const { lang } = useParams();

  const [locals, setLocals] = useState();

  useEffect(() => {
    let active = true;
    load();

    async function load() {
      setLocals(undefined);
      const locals = await getDictionary(lang);
      if (!active) return;

      setLocals(locals);
    }

    return () => {
      active = false;
    };
  }, [lang]);

  const t = (str: string) => {
    if (!str) return '';
    const s = translate(locals, str);
    return !s ? str : s;
  };

  return { t };
}
