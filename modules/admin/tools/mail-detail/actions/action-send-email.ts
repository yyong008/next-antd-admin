import * as toolsMailServices from '@/services/tools/mail';

import { from, lastValueFrom, map, switchMap } from 'rxjs';

export async function sendMail({ request }: any) {
  const result$ = from(request.json()).pipe(
    map(
      (data: any) =>
        ({
          host: data.host,
          port: data.port,
          auth: {
            user: data.user,
            pass: data.pass,
          },
          from: data.from,
          to: data.to,
          subject: data.subject,
          html: data.html,
        }) as any,
    ),
    switchMap((data: any) => {
      return toolsMailServices.sendMail$(data);
    }),
  );

  return lastValueFrom(result$);
}
