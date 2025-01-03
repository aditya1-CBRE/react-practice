import React from 'react'
import './mystyles.css'
function Stylesheet(props) {
    const className = props.primary ? 'primary':'';
  return (
    <div>
      <h1 className={`${className} font-xl`}>One Piece</h1>
    </div>
  )
}

export default Stylesheet
