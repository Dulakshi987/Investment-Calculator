import Header from './component/header';
import './App.css';
import {useState} from 'react';
import UserInput from './component/userinput';
import Result from './component/result';

function App() {
  const [userinput, setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});

function handleChange(inputIdentifier, newvalue){
    setUserInput(preUserInput =>{
        return{
            ...preUserInput,
            [inputIdentifier]: +newvalue

        }
    });

}


const validInput= userinput.duration >=1;
  return (
    <>
       <Header/>
       <UserInput OnChange={handleChange} UserInput={userinput}/>
      {validInput && <Result input={userinput}/>}
      {!validInput && <p className='center'>Please Enter Duation 1 or greater Number</p>}
    </>
  );
}

export default App;
