import React from 'react'

const Cardbox = ({cssstyle, btnTxt, clkHand, children}) => {
  return (
    <div className='bg-slate-400 p-7 flex flex-col justify-center items-center rounded-md h-[200px] w-full md:w-[30%] object-cover shadow-sm shadow-cyan-500/20 inset-shadow-lg inset-shadow-black-500/80'>
       {children}
        <button type='button' onClick={clkHand} className={`${cssstyle} frmbtn`}>{btnTxt}</button>
    </div>
  )
}

export default Cardbox