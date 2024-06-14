'use client';

import { BlogItem } from '.';

export function RouteUI({ blogs }: any) {
  return (
    <div className="flex flex-col pt-[140px] w-[40vw] h-[80vh]">
      <div>
        {blogs?.map((n: any) => {
          return <BlogItem data={n} key={n.id} />;
        })}
      </div>
    </div>
  );
}
