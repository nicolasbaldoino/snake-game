'use client'

import SnakeGame from '@/core/snake-game';
import { useState } from 'react';

const Game = () => {
  return (
    <>
      {typeof window !== "undefined" && <SnakeGame />}
    </>
  )
}

export default function Home() {
  const [play, setPlay] = useState(false);

  return (
    <div className='text-center items-center'>
      <h1 className='text-5xl uppercase'>Jogo da cobrinha</h1>

      <p>Use as setas ou W/A/S/D para jogar</p>

      <div className='relative mt-12'>
        {!play && (
          <div className='z-50 absolute h-[400px] flex justify-center items-center left-1/2 right-1/2'>
            <button
              onClick={() => setPlay(true)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-2xl focus:outline-none border-none shadow-lg'
            >
              {typeof window === "undefined" ? 'Carregando...' : 'Começar'}
            </button>
          </div>
        )}

        {!play && (
          <div style={{ filter: 'blur(10px)' }}>
            <Game />
          </div>
        )}
        {play && <Game />}
      </div>
    </div>
  );
}
