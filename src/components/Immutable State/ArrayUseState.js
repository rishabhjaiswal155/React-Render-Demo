import React,{useState} from 'react'
const initState=['Rishabh','Lucky']
export const ArrayUseState = () => {
    const[persons,setPersons]=useState(initState)

    const handleClick=()=>{
        // persons.push('Surabhi')
        // persons.push('Amol')
        // setPersons(persons)

        const newPersons=[...persons]
        newPersons.push('Surabhi')
        newPersons.push('Priyanka')
        setPersons(newPersons)
    }
    console.log('ArrayUseState Render')
  return (
    <div>ArrayUseState<br/>
    <button onClick={handleClick}>Click</button>
    {
       persons.map(person=>(
            <div key={person}>{person}</div>
        ))
    }
    </div>
  )
}
