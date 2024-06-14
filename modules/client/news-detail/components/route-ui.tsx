import { NewsContent, NewsHeader } from '.';

export function RouteUI({ news }: any) {
  return (
    <div className="flex flex-col pt-[140px] w-[40vw] h-[80vh]">
      <NewsHeader news={news} />
      <NewsContent content={news.content} />
    </div>
  );
}
