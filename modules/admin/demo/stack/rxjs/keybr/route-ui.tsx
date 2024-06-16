'use client';

import { PageContainer, ProCard } from '@ant-design/pro-components';

import { useKeyPress } from '@/hooks';

export function RouteUI() {
  const [key] = useKeyPress();
  const qwertyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  return (
    <PageContainer>
      <ProCard>
        <div className="flex flex-col justify-center align-middle h-[70vh] bg-green-400">
          <div className="text-center pb-[50px]">
            RxJS Keybr(Press keybr, RxJS in hooks)
          </div>
          <div className="flex justify-center 90vh">
            <div className="border-slate-400 border-spacing-1 border p-[20px] rounded">
              {qwertyRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="row flex align-center justify-center"
                >
                  {row.map((rowKey, keyIndex) => (
                    <div
                      key={keyIndex}
                      className={`flex align-center justify-center w-[80px] h-[80px] bg-slate-300 m-[4px] rounded-sm ${rowKey === key ? 'bg-yellow-500' : ''}`}
                    >
                      {rowKey.toUpperCase()}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProCard>
    </PageContainer>
  );
}
