import { useSnackbar } from 'notistack'
import React, { useState } from 'react'

const FormAddBal = ({onClose,  setBalance}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [addbal, setAddbal] =useState("")
  const handleInput = (value)=>{
    const regex = /^[0-9]+$/;
   if (regex.test(value) || value === "") {
    setAddbal(value);
  } else {
    enqueueSnackbar("use number only", { variant: "warning" })
   /// alert("use number only");
    setAddbal("");
  }
    
  }

  const addBalence = ()=>{
     const storedBalance = localStorage.getItem("balance") || "0";
     // console.log(storedBalance);
      const newTotal = Number(storedBalance) + Number(addbal);
      //console.log(newTotal);    
       setBalance(newTotal)
       localStorage.setItem("balance", newTotal);
        setAddbal("");
        enqueueSnackbar("Balance added", { variant: "success" })
        onClose(false)
  }
  
  const closeHanler = ()=>{
    setAddbal("");
     onClose(false)
  }
   return (
     <div className=' text-amber-950'>
         <h3 className=' text-3xl font-bold'>Add Balence</h3>
         <div className='inputwrp'>
             <input type='number' className='input' placeholder='Income Amount' value={addbal} onChange={(e)=>handleInput(e.target.value)}  />
         </div>
         <div className='btnwrp'>
             <button type="submit" className='addbth' onClick={addBalence}>Add Balance</button>
             <button className='canbtn' onClick={closeHanler}>Cancel</button>
         </div>
     </div>
   )
}

export default FormAddBal