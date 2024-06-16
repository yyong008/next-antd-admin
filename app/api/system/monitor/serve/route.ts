import { getSystemInfo$ } from '@/app/utils/system-info';
import { lastValueFrom } from 'rxjs';

export async function GET() {
  const result = await lastValueFrom(getSystemInfo$());
  return new Response(JSON.stringify({ code: 0, data: result }));
}
