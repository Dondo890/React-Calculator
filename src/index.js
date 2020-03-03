import React from 'react';
import ReactDOM from 'react-dom';
import './css/calculator.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



function CalculatorTable(props){

        return(
            
            <table className="calculator-table">
                <thead>
                    <tr>
                        <td colSpan={4}>
                            <input className="calculator-display-input" type="text" disabled={true} value={props.data.state.result}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <input className="calculator-display-input" type="text" disabled={true} value={props.data.state.display}/>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button onClick={props.data.clearInput} className="calculator-button">C</button></td>
                        <td><button onClick={props.data.rootInput} className="calculator-button">^2</button></td>
                        <td><button onClick={props.data.delInput} className="calculator-button">Del</button></td>
                        <td><button onClick={props.data.operationInput} className="calculator-button">*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={props.data.numInput} className="calculator-button">7</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">8</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">9</button></td>
                        <td><button onClick={props.data.operationInput} className="calculator-button">/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={props.data.numInput} className="calculator-button">4</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">5</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">6</button></td>
                        <td><button onClick={props.data.operationInput} className="calculator-button">-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={props.data.numInput} className="calculator-button">1</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">2</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">3</button></td>
                        <td><button onClick={props.data.operationInput} className="calculator-button">+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={props.data.numInput} className="calculator-button">0</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">00</button></td>
                        <td><button onClick={props.data.numInput} className="calculator-button">.</button></td>
                        <td><button onClick={props.data.resultComputation} className="calculator-button">=</button></td>
                    </tr>
                </tbody>
            </table>
        );


}


class MainScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            display:"",
            operation:"",
            result:""
        }

        this.numInput = this.numInput.bind(this);
        this.operationInput = this.operationInput.bind(this);
        this.resultComputation = this.resultComputation.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.rootInput = this.rootInput.bind(this);
        this.delInput = this.delInput.bind(this);

    }

    numInput(e){
        this.setState({
            display: this.state.display + e.target.textContent
        });
        
    }

    rootInput(){

        let displayValue = parseFloat(this.state.display);
        this.setState({
            result: "",
            display: displayValue * displayValue,
            operation:""
        })
    }

    operationInput(e){
        if(this.state.result === ""){
            this.setState({
                operation: e.target.textContent,
                result: this.state.display,
                display:""
            });
        }else{
            let displayValue = parseFloat(this.state.display);
            let resultValue = parseFloat(this.state.result);

            switch(this.state.operation){
                case '+':
                    this.setState({
                        result: resultValue + displayValue,
                        display: "",
                        operation: e.target.textContent
                    });
                    break;
                case '-':
                    this.setState({
                        result: resultValue - displayValue,
                        display: "",
                        operation: e.target.textContent
                    });
                    break;
                case '*':
                    this.setState({
                        result: resultValue * displayValue,
                        display: "",
                        operation: e.target.textContent
                    });
                    break;
                case '/':
                    this.setState({
                        result: resultValue / displayValue,
                        display: "",
                        operation: e.target.textContent
                    });
                    break;
                default:
                    break;
            }
        }
        
    }

    delInput(){
        this.setState({
            display: this.state.display.toString().substring(0, this.state.display.toString().length - 1) 
        });
    }

    clearInput(){
        this.setState({
            display: "",
            result: "",
            operation: ""
        })
    }

    

    resultComputation(){
        
        let displayValue = parseFloat(this.state.display);
        let resultValue = parseFloat(this.state.result);
        

        switch(this.state.operation){
            case '+':
                this.setState({
                    result: "",
                    display: resultValue + displayValue,
                    operation: ""
                });
                break;
            case '-':
                this.setState({
                    result: "",
                    display: resultValue - displayValue,
                    operation: ""
                });
                break;
            case '*':
                this.setState({
                    result: "",
                    display: resultValue * displayValue,
                    operation: ""
                });
                break;
            case '/':
                this.setState({
                    result: "",
                    display: resultValue / displayValue,
                    operation: ""
                });
                break;
            default:
                break;
        }

    }



    render(){
        return(
            <div>
                <CalculatorTable data={{
                    numInput: this.numInput,
                    operationInput: this.operationInput,
                    resultComputation: this.resultComputation,
                    clearInput: this.clearInput,
                    rootInput: this.rootInput,
                    delInput: this.delInput,
                    state: this.state
                }}/>
            </div>
        );
    }

}
 


ReactDOM.render(
    <MainScreen />,
    document.getElementById('root')
)



