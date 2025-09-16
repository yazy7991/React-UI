import React from 'react';
import { CheckCircle } from "lucide-react";

const WorkflowContent = ({title, desc}) => {
  return (
    <div className='flex gap-2 mt-6 mb-20'>
        <CheckCircle className='text-green-500 mx-8' />
        <div className='flex flex-col'>
            <h2>{title}</h2>
            <p className='text-neutral-500'>{desc}</p>
        </div>
      
    </div>
  )
}

export default WorkflowContent
