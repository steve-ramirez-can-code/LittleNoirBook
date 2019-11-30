import React, { Component } from 'react';
import  '../App.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from "axios";
//testing


class FindClinics extends Component {
    constructor(props){
        super(props);
        this.state = {
            zipCode:0,
            information:null,
            matchZips:[11213, 10025, 10037, 11201, 10001, 10456, 11432, 11372],
        }
    }
   
    handleChange = (event)=>{
    this.setState({
            [event.target.id]:event.target.value
        })
        console.log(this.state)
    }

    handleSubmitToAPI = (event)=>{
        event.preventDefault();
        axios.get(`https://data.cityofnewyork.us/resource/fqke-ix7c.json?agency_id=NYC DOHMH STD Control&zip_code=${this.state.zipCode}`)
        .then((res) => {
          this.setState({
              information: res.data[0],
          })
          console.log("this is the state: ")
          console.log(this.state)
        })
        .catch(function (err) {
          console.log(err);
        });  
    };

    render(){

        if (this.state.information&&this.state.information.site_name==="Riverside STD Clinic") {
            return(
                <div>
                    <div>  
                        <p className="App-intro">
                        A little under the weather? 
                        <br/>
                        Worried or concerned? 
                        <br/>
                        Or simply trying to be in charge of your sexual/reproductive health? 
                        <br/> 
                        You're in the right place. 
                        <br/>
                        <br/>
                        Let's find a nearby clinic for HIV/STD testing, counseling, or safe sex resources.
                        </p>
                        <form>
                        <p>
                            <input type="text" placeholder="Zip Code" id="zipCode" onChange={this.handleChange}/>
                        </p>
                        <p> 
                             <input type="submit" onClick={this.handleSubmitToAPI}/>
                         <br/>
                        </p>                          
                        </form> 
                        <div id = "returnclinics">
                            
                            <strong>Closest Location to the Provided Zip Code:</strong> {this.state.zipCode} <br/>
                            <br/>
                            <strong>Clinic Name:</strong> {this.state.information.site_name} <br/>
                            <strong>Clinic Address:</strong> {this.state.information.address} <br/>
                            <br/> 
                            <strong>Clinic Hours: </strong>  
                            <br/>
                            <br/>
                            <strong>Monday Hours:</strong> {this.state.information.hours_monday} <br/>
                            <strong>Tuesday Hours:</strong> {this.state.information.hours_tuesday} <br/>
                            <strong>Wednesday Hours:</strong> {this.state.information.hours_wednesday} <br/>
                            <strong>Thursday Hours:</strong> {this.state.information.hours_thursday} <br/>
                            <strong>Friday Hours:</strong> {this.state.information.hours_friday} <br/>
                            <strong>Saturday Hours:</strong> {this.state.information.hours_saturday} <br/>
                            <strong>Sunday Hours:</strong> CLOSED <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </div> 
                    </div>

                </div>
                 )
        } 
        else if (this.state.information&&this.state.information.site_name==="Chelsea STD Clinic **CLOSED AS OF 3/23**"){
            return(
                <div>
                    <div>  
                        <p className="App-intro">
                        A little under the weather? 
                        <br/>
                        Worried or concerned? 
                        <br/>
                        Or simply trying to be in charge of your sexual/reproductive health? 
                        <br/> 
                        You're in the right place. 
                        <br/>
                        <br/>
                        Let's find a nearby clinic for HIV/STD testing, counseling, or safe sex resources.
                        </p>
                        <form>
                        <p>
                            <input type="text" placeholder="Zip Code" id="zipCode" onChange={this.handleChange}/>
                        </p>
                        <p> 
                             <input type="submit" onClick={this.handleSubmitToAPI}/>
                         <br/>
                        </p>                          
                        </form> 
                        <div id = "returnclinics">
                            
                            <strong>Closest Location to the Provided Zip Code:</strong> {this.state.zipCode} <br/>
                            <br/>
                            <strong>Clinic Name:</strong> Chelsea STD Clinic <br/>
                            <strong>Clinic Address:</strong> {this.state.information.address} <br/>
                            <br/> 
                            <strong>Clinic Hours: </strong>  
                            <br/>
                            <br/>
                            <strong>Monday Hours:</strong> 8:30 AM - 3:30 PM <br/>
                            <strong>Tuesday Hours:</strong> 8:30 AM - 3:30 PM, 5:00 PM - 7:00 PM<br/>
                            <strong>Wednesday Hours:</strong> 8:30 AM - 3:30 PM <br/>
                            <strong>Thursday Hours:</strong> 8:30 AM - 3:30 PM, 5:00 PM - 7:00 PM <br/>
                            <strong>Friday Hours:</strong> 8:30 AM - 3:30 PM <br/>
                            <strong>Saturday Hours:</strong> 8:30 AM - 12:00 PM <br/>
                            <strong>Sunday Hours:</strong> CLOSED <br/>
                            

        
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </div> 
                    </div>

                </div>
                 )
        }
        else if (this.state.information&&this.state.information.site_name==="Corona STD Clinic"){
            return(
                <div>
                    <div>  
                        <p className="App-intro">
                        A little under the weather? 
                        <br/>
                        Worried or concerned? 
                        <br/>
                        Or simply trying to be in charge of your sexual/reproductive health? 
                        <br/> 
                        You're in the right place. 
                        <br/>
                        <br/>
                        Let's find a nearby clinic for HIV/STD testing, counseling, or safe sex resources.
                        </p>
                        <form>
                        <p>
                            <input type="text" placeholder="Zip Code" id="zipCode" onChange={this.handleChange}/>
                        </p>
                        <p> 
                             <input type="submit" onClick={this.handleSubmitToAPI}/>
                         <br/>
                        </p>                          
                        </form> 
                        <div id = "returnclinics">
                            
                            <strong>Closest Location to the Provided Zip Code:</strong> {this.state.zipCode} <br/>
                            <br/>
                            <strong>Clinic Name:</strong> {this.state.information.site_name} <br/>
                            <strong>Clinic Address:</strong> {this.state.information.address} <br/>
                            <br/> 
                            <strong>Clinic Hours: </strong>  
                            <br/>
                            <br/>
                            <strong>Monday Hours:</strong> 8:30 AM - 3:30 PM <br/>
                            <strong>Tuesday Hours:</strong> 8:30 AM - 3:30 PM <br/>
                            <strong>Wednesday Hours:</strong> CLOSED <br/>
                            <strong>Thursday Hours:</strong> CLOSED <br/>
                            <strong>Friday Hours:</strong> 8:30 AM - 3:30 PM <br/>
                            <strong>Saturday Hours:</strong> CLOSED <br/>
                            <strong>Sunday Hours:</strong> CLOSED <br/>
                            

        
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </div> 
                    </div>

                </div>
                 )
         
        }     
        else if (this.state.information){
            return(
                <div>
                    <div>  
                        <p className="App-intro">
                        A little under the weather? 
                        <br/>
                        Worried or concerned? 
                        <br/>
                        Or simply trying to be in charge of your sexual/reproductive health? 
                        <br/> 
                        You're in the right place. 
                        <br/>
                        <br/>
                        Let's find a nearby clinic for HIV/STD testing, counseling, or safe sex resources.
                        </p>
                        <form>
                        <p>
                            <input type="text" placeholder="Zip Code" id="zipCode" onChange={this.handleChange}/>
                        </p>
                        <p> 
                             <input type="submit" onClick={this.handleSubmitToAPI}/>
                         <br/>
                        </p>                          
                        </form> 
                        <div id = "returnclinics">
                            
                            <strong>Closest Location to the Provided Zip Code:</strong> {this.state.zipCode} <br/>
                            <br/>
                            <strong>Clinic Name:</strong> {this.state.information.site_name} <br/>
                            <strong>Clinic Address:</strong> {this.state.information.address} <br/>
                            <br/> 
                            <strong>Clinic Hours: </strong>  
                            <br/>
                            <br/>
                            <strong>Monday Hours:</strong> {this.state.information.hours_monday} <br/>
                            <strong>Tuesday Hours:</strong> {this.state.information.hours_tuesday} <br/>
                            <strong>Wednesday Hours:</strong> {this.state.information.hours_wednesday} <br/>
                            <strong>Thursday Hours:</strong> {this.state.information.hours_thursday} <br/>
                            <strong>Friday Hours:</strong> {this.state.information.hours_friday} <br/>
                            <strong>Saturday Hours:</strong> {this.state.information.hours_saturday} <br/>
                            <strong>Sunday Hours:</strong> {this.state.information.hours_sunday} <br/>
                            

        
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </div> 
                    </div>

                </div>
                 )
         
        }     
        else if (!this.state.information){
            return (
                <div>
                    <div>  
                        <p className="App-intro">
                        A little under the weather? 
                        <br/>
                        Worried or concerned? 
                        <br/>
                        Or simply trying to be in charge of your sexual/reproductive health? 
                        <br/> 
                        You're in the right place. 
                        <br/>
                        <br/>
                        Let's find a nearby clinic for HIV/STD testing, counseling, or safe sex resources.
                        </p>
                        <form>
                        <p>
                            <select name="zipCode" id="zipCode" onChange={this.handleChange}>
                            <option value="">Select Neighborhood Below</option>
                            <option value="10001">Chelsea, Manhattan</option>
                            <option value="10025">Upper West Side, Manhattan</option>
                            <option value="10037">Central Harlem, Manhattan</option>
                            <option value="10456">Morrisania, Bronx</option>
                            <option value="11201">Brooklyn Heights, Brooklyn</option>
                            <option value="11213">Crown Heights, Brooklyn</option>
                            <option value="11372">Jackson Heights, Queens</option>
                            <option value="11432">Jamaica, Queens</option>
                            </select>
                        </p>
                        <p> 
                             <input type="submit" onClick={this.handleSubmitToAPI}/>
                         <br/>
                        </p>                          
                        </form>  
                    </div>
                </div>
                )
        }
    }
        
}

export default FindClinics;



    