import React,{useState,useMemo,useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Rishabh')

    // const person={
    //     fname:'Rishabh',
    //     lname:'Jaiswal'
    // }

//    const MemoizedPerson=useMemo(()=>person,[])

     const handleClick=()=>{}

     const MemoizedHandleClick=useCallback(handleClick,[])

    console.log('parentFour Render')
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
        <button onClick={()=>setName('Lucky')}>ChangeName</button>
        {/* <MemoizedChildFive name={name} person={person}/> */}
        {/* <MemoizedChildFive name={name} person={MemoizedPerson}/> */}
        {/* <MemoizedChildFive name={name} handleClick={handleClick}/> */}
        <MemoizedChildFive name={name} handleClick={MemoizedHandleClick}/>
    </div>
  )
}