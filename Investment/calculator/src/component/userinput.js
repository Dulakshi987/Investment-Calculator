// import {useState} from 'react';


export default function UserInput({OnChange , userinput = {onchange}}){
    // const [userinput, setUserInput] = useState({
    //     initialInvenstment:1000,
    //     annualInvestment:1200,
    //     expectedReturn:6,
    //     duration:10,
    // })

    // function OnChange(inputIdentifier,newvalue){
    //     setUserInput(preUserInput =>{
    //         return{
    //             ...preUserInput,
    //             [inputIdentifier]:newvalue

    //         }
    //     });
    // }
return(
<section id="user-input">

<div id="input-group">
<p>
    <lable>Initial Investment</lable>
    <input type="number" required
    value={userinput.initialInvestment}
    OnChange={(event) => OnChange
        ('initialInvestment', event.target.value)
    }/>
</p>


<p>
<label>Annual Investment</label>
<input type="number" required
value={userinput.annualInvestment}
OnChange={(event)=> OnChange
    ('annualInvestment',event.target.value)}/>
</p>
</div>

<div id="input-group">
<p>
<label>Expected Results</label>
<input type="number" required
value={userinput.expectedReturn}
OnChange={(event)=> OnChange
    ('expectedReturn',event.target.value)}/>
</p>


<p>
<label>Duration</label>
<input type="number" required
value={userinput.duration}
OnChange={(event)=> OnChange
    ('duration',event.target.value)}/>
</p>
</div>
</section>
)
}