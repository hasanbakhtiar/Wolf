import React from 'react'

const ModeBtn = ({color,setColor}) => {
    const swichColor=()=>{
        setColor(color === "light" ? "dark":"light")
    }
  return (
    <div>
        <button onClick={swichColor}>mode</button>
    </div>
  )
}

export default ModeBtn