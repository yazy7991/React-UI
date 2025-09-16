import React from 'react';
import { CheckCircle2 } from "lucide-react";

const WorkflowContent = ({title, desc}) => {
  return (
    <div className='flex gap-2 mt-6 mb-20'>
        <CheckCircle2 className='text-green-400 mx-8 bg-neutral-900 rounded-full' />
        <div className='flex flex-col'>
            <h2 className='text-xl'>{title}</h2>
            <p className='text-neutral-500 text-md'>{desc}</p>
        </div>
      
    </div>
  )
}

export default WorkflowContent
