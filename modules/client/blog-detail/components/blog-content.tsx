'use client';

import * as dompurify from 'dompurify';

export function BlogContent({ content }: { content: string }) {
  return (
    <div
      className="mt-[20px]"
      dangerouslySetInnerHTML={{
        __html: dompurify?.sanitize(content),
      }}
    ></div>
  );
}
