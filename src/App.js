import React, { useState, useRef } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { onUpdate } from './reducers'


import ChipsInput from './ChipsInput';

const App = () => {

  const list = useSelector(state => state.list, shallowEqual);
  const dispatch  = useDispatch();

  const onSubmit = (value) => {
    let newList = [
      ...list,
      {
        value
      }
    ];
    dispatch(onUpdate(newList))


  };

  const removeEl = (index) => {
    let newList = [...list];
    newList.splice(index,1); 
    dispatch(onUpdate(newList));
  }
  
  return (
    <div className="App">
       <label htmlFor="basic-url">Deposited Plan</label>
      <ChipsInput label='DP' name={'sdfasd'} placeholder={'planNumber'} chips={list} onSubmit={onSubmit} onRemove={removeEl} />
    </div>
  );
}

export default App;
