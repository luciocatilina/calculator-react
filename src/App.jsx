import './App.css';
import React from 'react';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import Screen from './components/Screen';
import { useState, useEffect } from 'react'
import { evaluate } from 'mathjs'


function App() {

  const [input, setInput]  = useState('');
  const [clearOutput, setClearOutput] = useState(false);
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {

    const isValidKey = /^[0-9+\-*/.=]|Enter$/;

    const handleKeyUp = () => {
      setIsKeyPressed(false);
    };  
  
  
    const handleKeyDown = ({ key }) => {
      if (!isKeyPressed) {
        setIsKeyPressed(true);
        if (isValidKey.test(key)) {
          let tecla = document.getElementById(key)
          //e.preventDefault();
          if (key === 'Enter') {
            calculateResult();
          }else {
            console.log(tecla)
            tecla.classList.add('activate')
            exeKeyword(key);
            setTimeout(() => {
              tecla.classList.remove('activate')
            }, 200)
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      }
  }, [isKeyPressed]);

  

  const exeKeyword = value => {
    if ( clearOutput ){
      if (isNaN(value)) {
        setClearOutput(false)
        setInput(input + value) 
      }else {
        setInput(value)
        setClearOutput(false)
      }

    }else {
      setInput(input + value) 
    }
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input).toString());
      setClearOutput(true);
    }
  }

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className='calculator'>
        <Screen input = {input}/>
          
        <div className="buttons">
          <div className="row">
            <Button manageClick = {exeKeyword}>1</Button>
            <Button manageClick = {exeKeyword}>2</Button>
            <Button manageClick = {exeKeyword}>3</Button>
            <Button manageClick = {exeKeyword}>+</Button>
          </div>
          <div className="row">
            <Button manageClick = {exeKeyword}>4</Button>
            <Button manageClick = {exeKeyword}>5</Button>
            <Button manageClick = {exeKeyword}>6</Button>
            <Button manageClick = {exeKeyword}>-</Button>
          </div>
          <div className="row">
            <Button manageClick = {exeKeyword}>7</Button>
            <Button manageClick = {exeKeyword}>8</Button>
            <Button manageClick = {exeKeyword}>9</Button>
            <Button manageClick = {exeKeyword}>*</Button>
          </div>
          <div className="row">
            <Button manageClick = {calculateResult}>=</Button>
            <Button manageClick = {exeKeyword}>0</Button>
            <Button manageClick = {exeKeyword}>.</Button>
            <Button manageClick = {exeKeyword}>/</Button>
          </div>
          <ButtonClear manageClick = { () => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
