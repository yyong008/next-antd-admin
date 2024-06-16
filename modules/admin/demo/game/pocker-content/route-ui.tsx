'use client';

import 'animate.css';
import './styles/pocker-card.css';

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Toaster, toast } from 'sonner';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import PockerItem from './components/pockers/PockerItem';
import PockerList from './components/pockers/PockerList';

export function RouteUI({ hs }: any) {
  const params = useParams();
  const { hhmz } = params;
  const router = useRouter();

  const [data, setData] = useState<any>({
    random: Math.floor(Math.random() * 16),
    guess: 0,
    status: 'idle',
  });

  const handleChoice = (index: any) => {
    setData({
      ...data,
      guess: index,
    });
  };

  useEffect(() => {
    if (hs?.every((h: any) => h !== hhmz)) {
      toast.promise(
        () =>
          new Promise(resolve =>
            setTimeout(() => {
              resolve(null);
              router.push('/pocker');
            }, 2000),
          ),
        {
          loading: '没有选择花色，即将返回？',
          success: 'Success',
          error: 'Error',
        },
      );
    } else {
      toast('猜测并选择一个扑克');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hhmz]);

  useEffect(() => {
    if (
      data.random !== 0 &&
      data.guess - 1 !== 0 &&
      data.random === data.guess - 1
    ) {
      setData({
        ...data,
        status: 'success',
      });
    } else if (data.random === 0 || data.guess === 0) {
      setData({
        ...data,
        status: 'idle',
      });
    } else {
      setData({
        ...data,
        status: 'failure',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.random, data.guess]);

  return (
    <PageContainer>
      <ProCard>
        <div className="pockercontent-container">
          <Toaster position="bottom-right" />
          <div className="guess-pocker-title">猜一个扑克牌</div>
          <PockerItem
            status={data.status}
            guess={data.random}
            num={data.guess}
            hs={params.hhmz as any}
          />
          <div className="guess-pocker-title">从下面选择一张扑克牌</div>
          <PockerList hs={params.hhmz as any} handleChoice={handleChoice} />
          <button
            className="play-again"
            onClick={() => {
              setData({
                random: Math.floor(Math.random() * 16),
                guess: 0,
                status: 'idle',
              });
              toast('猜测并选择一个扑克');
            }}
          >
            重新玩
          </button>
        </div>
      </ProCard>
    </PageContainer>
  );
}
