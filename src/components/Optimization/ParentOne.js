import React,{useState} from 'react'

export const ParentOne = ({children}) => {
    const[count,setCount]=useState(0)
    console.log('ParentOne Renders')
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>Count-{count}</button>
        {children}
    </div>
  )
}
