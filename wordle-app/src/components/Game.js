import React,{useState, useEffect} from 'react'

import "../styles/components/Game.css"

// import Board from './components/Board';
import LetterItem from './LetterItem';
import boardData from '../boardData';



function Game({handleStateProp}) {

    const [gameOver, setGameOver] = useState(null)

    const [attempt, setAttempt] = useState(0)

    const [board, setBoard] = useState(boardData)
    
    const[theWord, setTheWord] = useState("")


    useEffect(() => {
      const wordList = ['ABRIL','PERRO','LLORA','GATOS','MACRI','APPLE','TERMO','FIONA','AUDIO', 'BRAZO','LIBRO'];
      const a = wordList[Math.floor(Math.random() * wordList.length)];
      setTheWord(a);

    }, [])
    

    
    console.log(theWord);



  
  

    function prepareLettersArray(){
      let arr = [];
      for (let pos = 0; pos < 5; pos++) {
        for (let row = 0; row < 5; row++) {
          arr.push(board[pos][row])
        }
      }
      return (arr)
    } 
    let lettersArray = prepareLettersArray();
  
  
    function checkWords(argAttempt, argCorrectWord){
      const newBoard = [...board]
      let score = true;

      for (let pos = 0; pos < 5; pos++){
        if(board[argAttempt][pos].letter === argCorrectWord.charAt(pos)){
  
          newBoard[argAttempt][pos].color = 'green';
          setBoard(newBoard)
          score = score && true;
        }
  
        else if(argCorrectWord.includes(board[argAttempt][pos].letter) && (board[argAttempt][pos].letter) !== ""){
          newBoard[argAttempt][pos].color = 'orange';
          setBoard(newBoard)
          score = false;
        }
  
        else{
          newBoard[argAttempt][pos].color = 'red';
          setBoard(newBoard)
          score = false;
        }
      }
      if(score){
        setGameOver('WINNER');
      }else if(argAttempt>=4){
        setGameOver(`la palabra era ${argCorrectWord}`);
      }
    }
  
  
  // settea las letras del Board en base al input 
    function showWords(inputParam, attempt){
      const newBoard = [...board]   //PrevState del board
  
      let inputSplitted = inputParam.toUpperCase();  // to UpperCase
      inputSplitted.split("");  //string -> array
  
      for (let pos = 0; pos < 5; pos++) {
        newBoard[attempt][pos].letter = inputSplitted[pos];
        setBoard(newBoard)
      }
    }


 
    useEffect(() => {
      handleStateProp(gameOver);
    }, [gameOver, handleStateProp]);

  
    



  return (
    <>
      <div className='game-container'>
          {lettersArray.map((item, index) =>{
              return(<LetterItem key={index} value={item.letter} color={item.color}/>)
          } ) }
      </div>


      <div className='game-input-div'>
          <input type="text" maxLength={5} placeholder='Escriba la palabra' 
              onChange={(e) => {
                  showWords(e.target.value, attempt);
                  }
              }
              onKeyDown={e => {if(e.key === 'Enter'){
                  setAttempt(prevState => prevState+1)
                  checkWords(attempt, theWord);

                  e.target.value = "";
              }}}
          />
      </div>
    </>





  )
}

export default Game