import { Component } from "react";
import "./Calci.css"

class Calci extends Component<any, any> {
   
  constructor(props: any) {
    super(props);
    this.state = { num1: "", num2: "" ,symbol:"",out:""};
 
  }
 
  arthOperation = () => {
      const{num1,num2,symbol}=this.state;
      var N_num1=Number(num1);
      var N_num2=Number(num2);
    if(symbol==="+"){
        var res =N_num1 + N_num2;
        this.setState({out:res});
    }
    else if(symbol==="-"){
        var res =N_num1 - N_num2;
        this.setState({out:res});
    }
    else if(symbol==="x" || symbol==="*"){
        var res =N_num1 * N_num2;
        this.setState({out:res});
    }
    else if(symbol==="/"){
        var res =N_num1 / N_num2;
        this.setState({out:res});
    }
    else if(symbol==="%"){
        var res =N_num1 + N_num2;
        this.setState({out:res});
    }
   
  };



  render(){
    var { num1, num2 ,symbol,out} = this.state;
      return(
          <>
          <div className="mainContainer">
          <input  type="text" name="first number" placeholder="Enter the Number" value={num1} onChange={F_num => this.updateFValue(F_num)} />
          <br />
          <input className="input1" type="text" name="symbol" value={symbol}  onChange={SY => this.updateSYValue(SY)} /><span className="span">(*Operation Symbol)</span>
          <br />
          <input  type="text" name="second number" value={num2} placeholder="Enter the Number" onChange={S_num => this.updateSValue(S_num)}/>
          <br />
          <button  type="submit" onClick={this.arthOperation}>=</button>
          <p>Result is : {out}</p>
          </div>
          </>
      )
  }
  updateFValue(F_num:any) {
    this.setState({
      num1: F_num.target.value
    });
  }
  updateSYValue(SY:any) {
    this.setState({
      symbol: SY.target.value
    });
  }
  updateSValue(S_num:any) {
    this.setState({
      num2: S_num.target.value
    });
  }
}

export default Calci;





//getting user input: another type( simply replace the 38-71 code lines instead of below codes)


// getting the user input method

// handleInputChange=(key:string,value:string)=>{
//     this.setState({[key]:value});
// }





//   render(){
//     var { num1, num2 ,symbol,out} = this.state;
//       return(
//           <>
//           <div className="mainContainer">
//           <input  type="text" name="first number" placeholder="Enter the Number" value={num1} onChange={event => this.handleInputChange("num1",event.target.value)} />
//           <br />
//           <input className="input1" type="text" name="symbol" value={symbol}  onChange={event => this.handleInputChange("symbol",event.target.value)} />
//           <br /><span className="span">(*Operation Symbol)</span>
//           <br />
//           <input  type="text" name="second number" value={num2} placeholder="Enter the Number" onChange={event => this.handleInputChange("num2",event.target.value)} />
//           <br />
//           <br />
//           <button  type="submit" onClick={this.arthOperation}>=</button>
//           <p>Result is : {out}</p>
//           </div>
//           </>
//       )
//   }


  // get the user input method
//   updateFValue(F_num:any) {
//     this.setState({
//       num1: F_num.target.value
//     });
//   }
//   updateSYValue(SY:any) {
//     this.setState({
//       symbol: SY.target.value
//     });
//   }
//   updateSValue(S_num:any) {
//     this.setState({
//       num2: S_num.target.value
//     });
//   }