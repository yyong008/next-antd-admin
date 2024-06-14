'use client';

import * as dompurify from 'dompurify';

export function NewsContent({ content }: { content: string }) {
  return (
    <div
      className="mt-[20px]"
      dangerouslySetInnerHTML={{
        __html: dompurify?.sanitize(content),
      }}
    ></div>
  );
}
