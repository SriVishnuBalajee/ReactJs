import {Component} from "react";
import './Details.css';
class Detail extends Component{
    constructor(){
        super();
        this.state={
            Projectname:"UNKNOWN",
            Managername:"UNKNOWN",
            Startdate:"UNKNOWN"
        }
        this.updateName=this.updateName.bind(this);
        this.updateManager=this.updateManager.bind(this);
        this.updateStartDate=this.updateStartDate.bind(this);
    }
    render(){        
        return(
        <div >
          <form id="0">
              <input  id="1" placeholder="ProjectName" type="text" onChange={this.updateName} /><br></br>
              <input  id="2" placeholder="ManagerName" type="text" onChange={this.updateManager}/><br></br>
              <input  id="3" placeholder="Start Date" type="date"  onChange={this.updateStartDate}/><br></br>
              <input type="submit" value="SAVE"/>
              <input id="4" type="reset"  value="RESET"/>
          </form>
          <b> Name: {this.state.Projectname} Managername: {this.state.Managername} Date: {this.state.Startdate}</b>
          
        </div>
   ); }
   updateName(event){
    console.log(event.target.value);
    this.setState({Projectname:event.target.value});
 }
   updateManager(event){
    console.log(event.target.value);
    this.setState({Managername:event.target.value});
   }
   updateStartDate(event){
    console.log(event.target.value);
    this.setState({Startdate:event.target.value});
   }
}
export default Detail;