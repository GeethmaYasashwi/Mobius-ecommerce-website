import React from 'react'
import { Button } from './ui/button'

function TestComponent() {
  return (
    <div className='px-4 lg:px-16 py-8 border border-black'>
        <h1 className='text-2xl'>{0}</h1>
        <Button onClick={()=>console.log(clicked)}>Click me</Button>
    </div>
  )
}

export default TestComponent