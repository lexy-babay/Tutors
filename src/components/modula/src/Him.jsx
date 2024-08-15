import React, { useState } from 'react'

function Him() {
    let [move,setmove] = useState ('-300px')

    function jet() {
        setmove ('0px')
        
    }
    
    function ret() {
      setmove ('-300px')
      
  }


  return (
    <div className='wen'>
        <div className="her" style={{marginTop:move}}></div>
        <button className='f' onClick={jet}>click</button>
        <button className='ff' onClick={ret}>clear</button>

    </div>
  )
}

export default Him