import React, {useState} from 'react';
import FormMainLeft from './FormMainLeft';
import FormMainRight from './FormMainRight';
import MainLayout from '../Layout/MainLayout';

const FormMain = () => {
  const init = useState(true);
  return (
    <MainLayout>
      <div className='form'>
        <FormMainLeft data={init}/>
        <FormMainRight />
      </div>
    </MainLayout>
  )
}

export default FormMain