'use client';

import { Chat } from './components/chat';
import { LocalModels } from './components';
import { Ollama } from 'ollama/browser';
import { useEffect } from 'react';

type OllamaWithNull = null | Ollama;

let ollama: OllamaWithNull = null;

export function RouteUI({ data }: any) {
  useEffect(() => {
    if (!ollama) {
      ollama = new Ollama({ host: data?.OLLAMA_URL });
    }
    return () => {
      ollama = null;
    };
  }, [data]);

  return (
    <div className="flex flex-col h-[100vh]  w-[100%] items-center">
      <LocalModels ollama={ollama} />
      <Chat data={data} ollama={ollama} />
    </div>
  );
}
