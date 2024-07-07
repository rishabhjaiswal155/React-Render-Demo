import React,{useContext} from 'react'
import { CountContext} from './ContextParent'

export const ChildA = () => {
    console.log('ChildA Renders')
  return (
    <div>ChildA
        <ChildB/>
    </div>
  )
}

export const ChildB = () => {
    console.log('ChildB Renders')
    return (
      <div>ChildB
          <ChildC/>
      </div>
    )
  }
  
  export const ChildC = () => {
    const count=useContext(CountContext)
    console.log('ChildC Renders')
    return (
      <div>ChildC Count-{count}</div>
    )
  }
  