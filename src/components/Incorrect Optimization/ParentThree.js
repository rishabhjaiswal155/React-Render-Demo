import React, { useState } from 'react'
import { MemoizedChildThree } from './ChildThree'

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Rishabh')
    console.log('ParentThree Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count-{count}</button>
            <button onClick={() => setName('Lucky')}>ChangeName</button>
            <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree>
        </div>
    )
}
