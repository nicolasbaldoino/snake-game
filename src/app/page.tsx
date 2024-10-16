'use client'

import SnakeGame from '@/core/snake-game';

export default function Home() {
  return (
    <div className='text-center'>
      <h1 className='text-5xl'>Jogo da cobra</h1>
      
      <p>Use as setas ou W/A/S/D para jogar</p>

      {typeof window === "undefined" && (
        <p>Carregando..</p>
      )}
      {typeof window !== "undefined" && <SnakeGame />}
    </div>
  );
}
