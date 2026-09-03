'use client';

import { useState } from 'react'
import { useCounterStore } from '../store/useCounterStore';

const Counter = () => {
  //const [count, setCount] = useState(value || 10);
  const { count, inc, dec, reset } = useCounterStore();
  
  return (
    <div className='flex flex-col items-center'>
      <span className="text-9xl">{ count }</span>
      <div className="flex gap-2">
        <button className="cursor-pointerflex items-center justify-center p-2 rounded-xl bg-gray-800 hover:bg-gray-600 text-white transition-all w-25 active:scale-95" 
                onClick={ dec }
              > -1 </button>
        <button className="cursor-pointerflex items-center justify-center p-2 rounded-xl bg-gray-800 hover:bg-gray-600 text-white transition-all w-25 active:scale-95" 
                onClick={ reset }
              > reset </button>
        <button className="cursor-pointerflex items-center justify-center p-2 rounded-xl bg-gray-800 hover:bg-gray-600 text-white transition-all w-25 active:scale-95" 
                onClick={ inc }
              > +1 </button>
      </div>
    </div>
  )
}

export default Counter
