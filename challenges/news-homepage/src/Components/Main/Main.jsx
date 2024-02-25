import React, { useEffect } from 'react';
import MainBot from './MainBot';
import MainTop from './MainTop';
import MainLayout from '../Layout/MainLayout';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import NameState from '../Recoil/NameState';

const Main = () => {
  const retrieved = useRecoilValue(NameState);
  const resetNames = useResetRecoilState(NameState);

useEffect(()=>{
  if(retrieved==='obiora'){
    resetNames();
  }
}, [retrieved, resetNames]);
  
  // localStorage.getItem('userNames');

  return (
    <MainLayout>
      <div className='main'>
          <MainTop />
          <MainBot />
      </div>
      <span>{retrieved}</span>
    </MainLayout>
  )
}

export default Main