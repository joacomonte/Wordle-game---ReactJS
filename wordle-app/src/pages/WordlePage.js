import React, {useState} from 'react'
import Game from '../components/Game';

function WordlePage() {

  const [gameState, setGameState] = useState(false);


  function handleStateFunc(gameOverArg){
    if (gameOverArg !==null){
      setGameState(gameOverArg)
    }
  }



  return (
    <>
    <div className='pageContainer-monte1'>
      <div className="App">
        <div className='title'>
          WORDLE
          <div className='subtitle'>
            by Montech
          </div>
        </div>

        <div>
          {gameState ? <h1 className='gameover'>{gameState}</h1> : <Game handleStateProp={handleStateFunc}/>}
        </div>
      </div>
    </div>


    </>
  )
}

export default WordlePage;
