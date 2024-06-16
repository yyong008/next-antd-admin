import { delay, of } from 'rxjs';

import { data } from '@/app/__mock__/db/lib/qrcode';

export const getQrCodeList$ = () => {
  return of(data).pipe(delay(20));
};
