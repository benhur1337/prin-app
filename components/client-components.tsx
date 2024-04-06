"use client"

import { useState } from 'react'

import { Heading } from './components'

export function Counter(){

    

    const [count, setCount] = useState(0)

    function increaseCount(){
        setCount(count + 1)
        console.log('howdy')
    }

    function decreaseCount(){
        setCount(count - 1)
    }

    return(
        <div className='flex flex-col justify-center items-center gap-4 p-6'>
            <Heading> { count } </Heading>
            <div className='flex flex-row gap-4'>
                <button onClick={decreaseCount} className='p-2 text-xl border border-black bg-black rounded text-white'> Decrease - </button>
                <button onClick={increaseCount} className='p-2 text-xl border border-black bg-black rounded text-white'> Increase + </button>
            </div>
        </div>
    )
}