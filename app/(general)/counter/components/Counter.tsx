'use client';

import { useState } from 'react'

interface CounterProps {
    value?: number;
}

const Counter = ({ value }: CounterProps) => {
  const [count, setCount] = useState(value || 10);
  
  return (
    <div className='flex flex-col items-center'>
      <span className="text-9xl">{ count }</span>
      <div className="flex gap-2">
        <button className="cursor-pointerflex items-center justify-center p-2 rounded-xl bg-gray-800 hover:bg-gray-600 text-white transition-all w-25 active:scale-95" 
                onClick={() => setCount(count - 1)}
              > -1 </button>
        <button className="cursor-pointerflex items-center justify-center p-2 rounded-xl bg-gray-800 hover:bg-gray-600 text-white transition-all w-25 active:scale-95" 
                onClick={() => setCount(count + 1)}
              > +1 </button>
      </div>
    </div>
  )
}

export default Counter
