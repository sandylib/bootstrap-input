import React, { useState, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  InputGroup,
  Form,
  Row,
  Col
} from 'react-bootstrap';

const App = () => {
  const formControlRef = useRef();
  const [list, setList] = useState([
    {name:'first'},
    {name:"second"}
  ]);

  const onSubmit = (e) => {
    console.log(e);
    let newList = [
      ...list,
      {
        name:e
      }
    ];
    setList(newList)

  };

  const removeEl = (index) => {
    let newList = [...list];
    newList.splice(index,1);
    setList(newList);
  }
  
  return (
    <div className="App">
      <label htmlFor="basic-url">Deposited Plan</label>
      <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon3">
          DP
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Row  className='align-items-center' noGutters>
        {list.map((el, index) => {
          return(
            <Col sx="auto" className="p-2" key={index} onClick={()=>removeEl(index)}>
                {el.name}
            </Col>
          );
        })}
      </Row>
      <Col xs>
        <Form
          onSubmit={(e) =>{
            e.preventDefault();
            onSubmit(formControlRef.current.value);
          }}
          noValidate
        >
          <Form.Control
            ref={formControlRef}
            placeholder="Plan Number"
          />
        </Form>
      </Col>
    </InputGroup>
    </div>
  );
}

export default App;
