import React,{useState} from 'react'
const initState={
    fname:'Rishabh',
    lname:'Jaiswal'
}

export const ObjectUseState = () => {
    const[person,setPerson]=useState(initState)

    const changeName=()=>{
        // person.fname='Lucky'
        // person.lname='Jaiswal'
        // setPerson(person) 

        const newPerson={...person}
        newPerson.fname='Lucky'
        newPerson.lname='Jaiswal'
        setPerson(newPerson)
     }
console.log('ObjectUseState Render')     
  return (
    <div>ObjectUseState<br/>
    <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
