import React, { useEffect, useState } from 'react'
import Cardbox from './Cardbox'
import { Pie, PieChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import ModalCus from './ModalCus';
import Formexp from './Formexp';
import FormAddBal from './FormAddBal';

const Mainexpence = ({topexpnc, espenceData, setEspenceData, setTotalExp, expnc}) => {
  console.log("========", espenceData);
  
     const [isOpen, setIsOpen] = useState(false);
const [modalType, setModalType] = useState(null);
const [pieData, setPieData] = useState([]);
const [balance, setBalance] = useState(() =>
  Number(localStorage.getItem("balance")) || 0
);

useEffect(() => {
  localStorage.setItem("balance", balance);
}, [balance]);
const openHandler = (type) => {
  setModalType(type);
  setIsOpen(true);
};

const closeHandler = () => {
  setIsOpen(false);
  setModalType(null);
};

     useEffect(() => {
       const calcuPie = ()=>{
          const pidata = topexpnc.map((item) => {return  {name: item.catNam, uv: item.total}})
         // console.log("pidata", pidata);
          
          setPieData(pidata)
       }
        calcuPie()
     }, [topexpnc])
     


//     const data = [
//   { name: 'Food', uv: 100 },
//   { name: 'Entertainment', uv: 590 },
//   { name: 'Travel', uv: 868 },
//   { name: 'Education', uv: 868 },
// ];

const sumExpance = topexpnc.reduce((previousValue, currentValue) => previousValue + Number(currentValue.total) , 0)


  return (
    <div className=' bg-slate-600 p-0 rounded-md w-full flex justify-between items-center gap-2 flex-wrap p-6'>
<ModalCus isOpen={isOpen} onClose={closeHandler}>
  {modalType === 'expense' && <Formexp onClose={closeHandler} expnc={expnc} espenceData={espenceData} setEspenceData={setEspenceData} setTotalExp={setTotalExp} setBalance={setBalance}/>}
  {modalType === 'balance' && <FormAddBal onClose={closeHandler}  setBalance={setBalance} />}
</ModalCus>






        <Cardbox cssstyle="bg-linear-to-r from-lime-200 to-lime-500  text-gray-900 " btnTxt="+ Add Income" clkHand={() => openHandler('balance')}>
           <div className='txtclass'>Wallet Balance : <span className='subtxt'>₹ {balance}</span></div>
        </Cardbox>
        <Cardbox cssstyle="bg-linear-to-r from-rose-200 to-rose-500  text-gray-900" btnTxt="+ Add Expense" clkHand={() => openHandler('expense')}>
           <div className='txtclass'>Expence : <span className='subtxt'>₹ {sumExpance}</span></div>
        </Cardbox>
        <div className='rounded-md h-[200px] w-full md:w-[25%] object-cover justify-center flex'>
            <PieChart width={150} height={150}>
      <Pie
        data={pieData}
        dataKey="uv"
        cx="50%"
        cy="50%"
        outerRadius={70}
        fill="#8884d8"
        isAnimationActive={true}
      />
      <Tooltip />
      <RechartsDevtools />
    </PieChart>
        </div>
    </div>
  )
}

export default Mainexpence