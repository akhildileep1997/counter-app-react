import React, { useState } from 'react'
import {MDBBtn} from 'mdb-react-ui-kit'
function Counter() {
 //state creation
 const [counter,setCounter]=useState(0) //sets initial value to zero
 //define function in increment button
 function incrementCounter(){
    //increment by one
    setCounter(counter+1)
 }
 function decrementCounter(){
   if(counter!==0)
   {
     //decrement by 1
     setCounter(counter-1)
   }
 }
 function resetCounter(){
    //set the counter value to zero
    setCounter(0)
 }
  return (
    <div className='m-5 p-5 w-50 d-flex justify-content-center align-items-center'>
        <div className='container m-5 p-5 border border-2 border-rounded border-secondary shadow bg-info text-light '>
          <h1 className='text-center'>Counter App</h1>
          <h1 className='text-center text-danger'>{counter}</h1>
          <div className='d-flex justify-content-between'>
           <MDBBtn color='success' className='' onClick={incrementCounter}>Increment</MDBBtn> 
           <MDBBtn color='warning' className='' onClick={decrementCounter}>Decrement</MDBBtn> 
           <MDBBtn color='danger' onClick={resetCounter}>Reset</MDBBtn> 


        </div>
        </div>
    </div>
  )
}

export default Counter