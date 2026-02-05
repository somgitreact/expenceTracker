import React, { useEffect, useState } from 'react'

const Topexpence = ({topexpnc}) => {

  //  const filter = [...expnc]?.sort((a,b)=>b.price - a.price)
   //  console.log("all filter", filter);

//        catall.forEach((cat) => {
//          let presentval = expnc?.filter((menu) => { menu.cat === cat})
//          .reduce((previousValue, currentValue) => {
//                       return previousValue + Number(currentValue.price)
//           }, 0)
//           setTopexpnc(prev=> ([...prev, {"catNam": cat, "total":presentval}]))
//        })

// console.log(topexpnc);
      

      


  return (
    <div className=' w-full md:w-[30%]'>
        <h2>Top Expences</h2>
        <div className=' bg-amber-50 p-3.5 flex-1 rounded-sm'>
            <ul className='overscroll-y-auto'>
               {topexpnc?.map((item) => {
                return(
                    <li key={item.catNam} className=' text-emerald-950 flex mt-0.5 gap-2.5'>
                    <div className='w-[40%] text-right font-bold'>{item.catNam}:</div> <div className='price grow bg-cyan-100 ps-2.5'>{item.total}</div>
                    </li>
                )
               })}
                
            </ul>
        </div>
    </div>
  )
}

export default Topexpence