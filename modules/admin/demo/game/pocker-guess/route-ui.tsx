'use client';

import './styles/pocker-card.css';
import 'animate.css';

import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useParams, useRouter } from 'next/navigation';

const PockerCard = (props: { content: string; addr: string }) => {
  const router = useRouter();
  const { lang } = useParams();

  const handleJump = (k: string) => {
    router.push(`/${lang}/admin/demo/game/pockercontent/${k}`);
  };
  return (
    <div
      className="card"
      onClick={() => {
        handleJump(props.addr);
      }}
    >
      {props.content}
    </div>
  );
};

export function RouteUI() {
  return (
    <PageContainer>
      <ProCard>
        <div className="card-container bg-orange-400">
          <PockerCard content="♠" addr="hei" />
          <PockerCard content="♥" addr="hong" />
          <PockerCard content="♣" addr="mei" />
          <PockerCard content="♦" addr="zhuan" />
        </div>
      </ProCard>
    </PageContainer>
  );
}
