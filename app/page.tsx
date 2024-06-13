import { defaultLang } from '@/config';
import { redirect } from 'next/navigation';

export default function Home() {
  return redirect('/' + defaultLang);
}
