import React from 'react';
import codeImg from '../src/assets/code.jpg';
import {checklistItems} from '../src/constants/index.jsx';
import WorkflowContent from './WorkflowContent';

const Workflow = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl sm:text-4xl lg:text-5xl mb-4'>Accelerate your 
        {" "}
        <span className='bg-gradient-to-r from-green-500 
        to-green-800 text-transparent bg-clip-text'>codings workflow</span>
      </h1>

      <div className='flex'>
        <img className='w-1/2' src={codeImg} alt='This is an image of a code snippet' />
        <div className='w-1/2'>
          {
            checklistItems.map((checkList,index)=>(
              <WorkflowContent key={index} title={checkList.title} desc={checkList.description}/>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Workflow
