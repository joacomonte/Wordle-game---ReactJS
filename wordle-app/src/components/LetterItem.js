import React from 'react'
import "../styles/components/LetterItem.css"

function LetterItem(props) {

  return (
    <div className='box' style={ {backgroundColor: props.color} }> 

        {props.value}

    </div>
  )
}

export default LetterItem