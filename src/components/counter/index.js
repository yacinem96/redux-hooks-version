

import React from 'react'
import { Button } from 'react-bootstrap'
export const Counter = ({counter,dispatch}) => {
 
    return (
        <div>
            <h1>Counter App</h1>
            <h1>{counter}</h1>
          <Button variant='success' onClick={()=>dispatch({type:"INCREMENT"})}  >+</Button>
          <Button variant='danger' onClick={()=>dispatch({type:"DECREMENT"})} >-</Button>

        </div>
    )
}
