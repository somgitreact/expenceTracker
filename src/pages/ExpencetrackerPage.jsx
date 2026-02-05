import React, { useEffect, useState } from 'react'
import Mainexpence from '../component/Mainexpence'
import RecentExpence from '../component/RecentExpence'
import Topexpence from '../component/Topexpence'

const ExpencetrackerPage = () => {
    const [totalExp, setTotalExp]= useState();
      const [topexpnc, setTopexpnc] = useState([])
     
           const catall = [...new Set(totalExp?.map(item => item.category))]  
       //console.log(catall);

   useEffect(()=>{
     const storage = ()=>{
     setTotalExp( JSON.parse(localStorage.getItem('expenses')) ) 
     }
     storage()
   },[])
   //console.log(totalExp);

         useEffect(()=>{
   function createTopexpence(){
 const expData = catall.map((cat) => {
         let presentval = totalExp?.filter((menu) => menu.category === cat)
         .reduce((previousValue, currentValue) => previousValue + Number(currentValue.price), 0)
          return {"catNam": cat, "total":presentval}
       })
       console.log("expData", expData);
       
      setTopexpnc(expData) 
}     
createTopexpence()
      },[totalExp])

console.log("show topexp", topexpnc);


  return (
    <div className=' flex-1 flex flex-col'>
           <h1>Expense Tracker</h1>
           <Mainexpence expnc={totalExp} catall={catall} topexpnc={topexpnc}/>
           <div className=' flex gap-2 flex-1 flex-wrap justify-between '>
            <RecentExpence expnc={totalExp} /> <Topexpence topexpnc={topexpnc}/>
           </div>
    </div>
  )
}

export default ExpencetrackerPage