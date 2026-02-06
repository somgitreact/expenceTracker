import { useSnackbar } from 'notistack';
import React, { useState } from 'react'

const Formexp = ({onClose, setEspenceData, espenceData, setTotalExp, expnc, setBalance }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  


//       const handleInput = (e)=>{
//         const {name,value} = e.target
// console.log(name,value);

// const regex = /^[0-9]+$/;
// if(name==='price'){
//        if (regex.test(value) || value === "") {
//     setEspenceData(prev=>({...prev, [name]:value}))
//   } else {
//     alert("use number only");
//     setEspenceData(prev=>({...prev, [name]:''}))
//   }
   
// }else {
//     setEspenceData(prev=>({...prev, [name]:value}))
// }
 
//   }

const handleInput = (e) => {
  const { name, value } = e.target;

  if (name === "price") {

    if (value === "") {
      setEspenceData(prev => ({ ...prev, price: "" }));
      return;
    }


    if (isNaN(value) || Number(value) < 0) {
       enqueueSnackbar("Use numbers only for price", { variant: "warning" })
      //alert("Use numbers only for price");
      setEspenceData(prev => ({ ...prev, price: "" }));
      return;
    }


    setEspenceData(prev => ({
      ...prev,
      price: Number(value)
    }));
    return;
  }

  setEspenceData(prev => ({ ...prev, [name]: value }));
};

//console.log(espenceData);

const addExpnc = () => {

 if (
  !espenceData.title ||
  !espenceData.category ||
  !espenceData.date ||
  !espenceData.price
) {
  enqueueSnackbar("All fields are mandatory", { variant: "warning" });
  return;
}

  const storedBalance = Number(localStorage.getItem("balance"));
  const price = Number(espenceData.price);


  if (!storedBalance || isNaN(storedBalance)) {
     enqueueSnackbar("Balance not found", { variant: "warning" })
   // alert("Balance not found");
    return;
  }

  if (!price || isNaN(price)) {
     enqueueSnackbar("Please enter valid expense amount", { variant: "warning" })
   // alert("Please enter valid expense amount");
    return;
  }


  if (price > storedBalance) {
     enqueueSnackbar("Balance is insufficient", { variant: "warning" })
   // alert("Balance is insufficient");
    return;
  }


  const remainingBalance = storedBalance - price;
 setBalance(remainingBalance)
  localStorage.setItem("balance", remainingBalance);

    

  const oldExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let nowT = Date.now() + Math.random().toString(36).substring(2, 9);
  oldExpenses.push({...espenceData, id:nowT});
   setTotalExp(prev=>[...prev, {...espenceData, id:nowT}]) 
  localStorage.setItem("expenses", JSON.stringify(oldExpenses));


  setEspenceData({
    title: "",
    price: "",
    category: "",
    date: ""
  });
enqueueSnackbar("Expences Added to your list", { variant: "success" })
  onClose(false);
};

  
  const closeHanler = ()=>{
    setEspenceData({});
     onClose(false)
  }
  return (
    <div className=' text-amber-950'>
        <h3 className=' text-3xl font-bold'>Add Expense</h3>
        <div className='inputwrp'>
            <input  name="title" type='text' className='input' placeholder='title' value={espenceData.title} onChange={handleInput}  />
            <input name="price"  type='number' className='number' placeholder='Expense' value={espenceData.price} onChange={handleInput} />
            <select  id=""  name="category" onChange={handleInput}>
                <option value="">Select Category</option>
                <option value="Food"> Food</option>
                <option value="Entertainment"> Entertainment</option>
                <option value="Travel"> Travel</option>
                <option value="Education"> Education</option>
            </select>  
            <input
  type="date"
  name="date"
  value={espenceData.date || ""}
  onChange={handleInput}
/>
        </div>
        <div className='btnwrp'>
             <button  type="submit" className='addbth' onClick={addExpnc}>Add Expense</button>
             <button type="button" className='canbtn' onClick={closeHanler}>Cancel</button>
        </div>
    </div>
  )
}

export default Formexp