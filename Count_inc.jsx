import React from "react";

class Count_inc extends React.Component {
   
    state = {
        val:0
      } 

      inc =()=>{
      let val=this.setState({val:this.state.val+1});
      }

      dec =()=>{
        let val=this.setState({val:this.state.val-1});
        }
    render() { 
        return (
            <div>
                <button onClick={this.inc}>+</button>{this.state.val} <button onClick={this.dec}>-</button>
            </div>
        );
    }
}
 
export default Count_inc;