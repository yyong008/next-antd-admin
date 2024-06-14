import { RouteUI } from './components';
import { getDictionary } from '@/app/utils/locales';

export default async function Route({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return <RouteUI dict={dict} />;
}
