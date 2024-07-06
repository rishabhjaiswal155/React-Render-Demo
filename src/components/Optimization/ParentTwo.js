import React,{useState} from 'react'
import { ChildTwo, MemoizedChildTwo } from './ChildTwo'

export const ParentTwo = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Rishabh')
    console.log('ParentTwo Render')
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
        <button onClick={()=>setName('Lucky')}>ChangeName {name}</button>
        <MemoizedChildTwo/>
    </div>
  )
}
