import React, { useState } from 'react'

const RecentExpence = ({expnc}) => {


     
   const editHandler = (id)=>{
   const itemDlt = expnc?.find((item) => item.id == id)
   console.log(itemDlt);
   
        //localStorage.setItem('expenses', itemDlt)
   }
      const deleteHandler = (id)=>{
        const itmedit = expnc?.find((item) => item.id == id)
        localStorage.setItem('balance', Number(localStorage.getItem('balance')) + Number(itmedit.price) )
        const itemDlt = expnc?.filter((item) => item.id !== id)
      
        localStorage.setItem('expenses', JSON.stringify(itemDlt) )
 
    
   }
  return (
    <div  className='flex-1 w-full md:w-[60%]'>
        <h2>Recent Transactions</h2>
         <div className='p-3.5 flex-1  bg-amber-50 flex py-2 text-lime-950 rounded-md'>
           <ul className='overscroll-y-auto w-full '>
              
              {expnc?.map((item) => {
                       return(
                   <li key={item.id} className='flex py-2 border-amber-950 border-b items-center'>
                    <div className=' grow px-2'>{item.category}</div>
                    <div className=''>
                        {item.price} 
                        <button className='dlt'><span className='rounded-full border-amber-950 border w-7 h-7' onClick={()=>deleteHandler(item.id)} >X</span></button>
                        <button className='edt'><span className='rounded-full  border-amber-950 border' onClick={()=>editHandler(item.id)}>edit</span></button>
                        </div>
                </li>
                       )
              })}
                
            </ul>
        </div>

    </div>
  )
}

export default RecentExpence