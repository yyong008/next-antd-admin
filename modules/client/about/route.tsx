'use client';

import { RouteUI } from './components/index';
import getConfig from 'next/config';

export async function Route() {
  const { publicRuntimeConfig } = getConfig();
  return <RouteUI publicRuntimeConfig={publicRuntimeConfig} />;
}
