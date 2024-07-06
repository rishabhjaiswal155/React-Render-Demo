import React from 'react'

export const ChildThree = ({children,name}) => {
    console.log('ChildThree Render')
  return (
    <div>
        {children} {name}<br/>
        ChildThree Component</div>
  )
}
export const MemoizedChildThree=React.memo(ChildThree)
