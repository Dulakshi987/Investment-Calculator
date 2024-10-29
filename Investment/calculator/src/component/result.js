import { calculateInvestmentResult , formatter} from "../util/investment"

export default function Result({input}){

    const results = calculateInvestmentResult(input);
   const initialInvestment = results[0].valueEndOfYear - results[0].interest- results[0].annualInvestment;
   console.log(initialInvestment);

    return <table id="result">
        <thead id="data_table">
            <th id="data">YEAR</th>
            <th id="data">Investment Value</th>
            <th id="data">Interest (Year)</th>
            <th id="data">Total Interest</th>
            <th id="data">Invested Capital</th>
        </thead>

        <tbody>
      {results.map((yearData) => {
         const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment
         *yearData.year-initialInvestment;
         const totalInvestment = yearData.valueEndOfYear - totalInterest;
        return(
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvestment)}</td>
          </tr>  
        );
      })}    
        </tbody>
    </table>
}