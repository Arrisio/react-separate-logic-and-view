import {useEffect,useState, useLayoutEffect} from "react";

import {znoDemo} from "./znoConfigs";


const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

export const useZno = (coock)=>{
  const [inProgress, setInProgress] = useState(false)
  const [zno, setZno] = useState(coock);
  console.log('useZno', zno)

  useLayoutEffect(() => {
      console.log('useZno useEffect', zno)
      zno.amountWithNds = zno.items.reduce((accumulator, {amount}) => accumulator + amount, 0)
      setZno(zno)
  }, [zno.items]);


  const save = async () =>{
    setInProgress(true)
    await delay(1000)
    znoDemo[zno.key] = zno
    console.log('save',zno)
    setInProgress(false)
  }
  const addItem = () =>{
    console.log('addItem')
    const zno_ = {...zno}
    zno_.items.push({billNumber:null,items:[]})
    setZno(zno_)
  }
  return {
    zno: zno,
    actions:{
      save:save,
      addItem:addItem,
    },
    computed:{
      inProgress
    },
  }
}