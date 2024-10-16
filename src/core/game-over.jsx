export function GameOver(props) {
  return (
    <div
      id="GameBoard"
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}
    >
      <div id="GameOver" style={{ fontSize: props.width / 15 }}>
        <div id="GameOverText">GAME OVER</div>
        <div>Sua pontuação: {props.score}</div>
        <div>
          {props.newHighScore ? 'Novo recorde local' : 'Recorde local '}:{' '}
          {props.highScore}
        </div>
        <div id="PressSpaceText">Pressione Espaço para reiniciar</div>
      </div>
    </div>
  )
}
