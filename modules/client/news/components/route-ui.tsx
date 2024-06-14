import { NewsItem } from './';

export function RouteUI({ news }: any) {
  return (
    <div className="flex flex-col pt-[140px] w-[40vw] h-[80vh]">
      <div>
        {news?.map((n: any) => {
          return <NewsItem data={n} key={n.id} />;
        })}
      </div>
    </div>
  );
}
