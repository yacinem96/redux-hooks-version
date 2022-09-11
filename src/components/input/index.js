import React from 'react'
import { Form, Container} from 'react-bootstrap';

export const Title = ({title ,dispatch}) => {
  return (
    <Container>
    <h1>Donnez votre nom</h1>
   
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    
        <Form.Control type="text" onChange={(e)=>{dispatch({type:"CHANGETITLE", payload:e.target.value})}}  placeholder="Enter your name" />
  
      </Form.Group>

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form> 
    <h1 style={{margin:"20px"}}>je Suis {title}</h1>
  </Container>


  )
}
