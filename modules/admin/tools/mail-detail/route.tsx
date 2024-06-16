import * as toolsMailServices from '@/services/tools/mail';

import { lastValueFrom, of, switchMap } from 'rxjs';

import { RouteUI } from './route-ui';

export async function query({ params }: any) {
  if (!params || !params.id) {
    return null;
  }
  const result$ = of(params.id).pipe(
    switchMap(id => toolsMailServices.getEmailTemplateById$(Number(id))),
  );
  return await lastValueFrom(result$);
}

export async function Route(props: any) {
  const data = await query(props);

  return <RouteUI data={data} />;
}
