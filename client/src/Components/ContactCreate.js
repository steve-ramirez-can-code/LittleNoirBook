import React, { Component } from 'react';
import  '../App.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from "axios";

class ContactCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            personName:"",
            personPhone:"",
            personAge:0,
            address:"",
            contactMade:false,
            date:"",
            safeYes:"",
            birthControl:"",
            lastTested:"",
            lastTestedDate:"",
            status:"",
            promiscuity:"",
            extraNotes:"",
            rating:"",
            zodiacSign:"",
            menstruating:"",
        }
        console.log("this is the constructor console.log:")
        console.log(this.state)
    }

    handleChange = (event)=>{
        this.setState({
            [event.target.id]:event.target.value
        });
        // if(this.state.zodiacSign==="Yes"){
            //     console.log("They care about the zodiac sign")
            // }
            console.log("This is the handlechange console.log")
            console.log(this.state)
    }
    
    handleSubmitToDatabase = (event)=>{
            event.preventDefault();
            axios.post("/users/createcontact", {
                personName:this.state.personName,
                userId: this.props.userid, 
                personPhone:this.state.personPhone,
                personAge:this.state.age,
                address:this.state.address,
                date:this.state.date,
                safeYes:this.state.safeYes,
                zodiacSign: this.state.zodiacSign,
                birthControl:this.state.birthControl,
                lastTested:this.state.lastTested,
                lastTestedDate:this.state.lastTestedDate,
                status:this.state.status,
                promiscuity:this.state.promiscuity,
                extraNotes:this.state.extraNotes,
                rating:this.state.rating,
                menstruating:this.state.menstruating,
            })
            .then(res => {
                // window.alert(`${res.data}-this is within contactcreate.js`);
                window.alert("Contact added to your LBB");
                this.setState({
                   contactMade:true 
                })
            })
            .catch(function(err) {
                console.log(err);
            });   
        };
    
    render (){
        if (this.state.contactMade===true) {
            return (
                <Redirect to="/home" />
            )
        }
        return(
    <div>
        <h2 className="App-title"> Let's add a new contact to your Little Black Book</h2>
        <div className= "App-intro">
            <form>
                <input type="text" placeholder="Name of Person" id="personName" onChange={this.handleChange}/>    
                <input type="tel" placeholder="Person's Phone Number" id="personPhone"onChange={this.handleChange}/> <br/>
                <input type="text" placeholder="Age of Person" id="personAge" onChange={this.handleChange}/>
                <input type="text" placeholder="Location of Encounter" id="address"onChange={this.handleChange}/><br/><br/>
                <li style= {{fontSize:"80%", listStyle:"none"}}>Date of Encounter</li>
                <input type="date" id="date" onChange={this.handleChange}/><br/><br/> 
            
                <li style={{fontSize:"90%", listStyle:"none"}}>Was protection used?</li>
                <select id="safeYes"onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="True">Yes</option>
                    <option value="False">No</option>
                    <option value="N/A">Don't Remember/Unsure/Not Applicable</option> 
                </select> <br/>
                <br/>
                <li style={{fontSize:"90%", listStyle:"none"}}>Were they or you using birth control?</li>
                <select id="birthControl"onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="True">Yes</option>
                    <option value="False">No</option>
                </select> <br/>
                <br/>
                
                <li style={{fontSize:"90%", listStyle:"none"}}>Do you know when they were last tested?</li>
                <select id="lastTested"onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="True">Yes</option>
                    <option value="False">No</option>
                </select> <br/>
                <br/>
                
                <li style={{fontSize:"90%", listStyle:"none"}}>When?</li>
                <input type = "date" id="lastTestedDate" onChange={this.handleChange}/> <br/>
                <br/>
                <li style={{fontSize:"90%", listStyle:"none"}}>What is their STI(Sexually Transmitted Infection) and HIV(Human Immunodeficiency Virus) status?</li>

                <select id="status"onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="SNHN">STI & HIV Negative </option>
                    <option value="SPNP">STI & HIV Positive </option>
                    <option value="SNHP">STI Negative & HIV Positive </option>
                    <option value="SPHN">STI Positive & HIV Negative </option>
                    <option value="Unknown"> Unsure/Unknown/Not Applicable </option>                         
                </select> <br/>
                <br/>

                <li style={{fontSize:"90%", listStyle:"none", display:"none"}}>Does their Zodiac Sign matter?</li>
                <select id="zodiacSign"onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Aries">Aries</option>
                    <option value="Taurus">Taurus</option>
                    <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>

                </select> <br/>
                <br/>

                <li style={{fontSize:"90%", listStyle:"none"}}>What is their relationship/activity status?</li>
                <select id="promiscuity"onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="Sinfun">Single & Having lots of Fun</option>
                    <option value="Sinrare">Single & This is a rare occurence</option>
                    <option value="Openfun">Open Relationship & Having lots of Fun </option>
                    <option value="Openrare">Open Relationship & This is a rare occurence </option>
                    <option value="Partfun">Partner Unaware & Having lots of Fun </option>
                    <option value="Partrare">Partner Unaware & This is a rare occurence </option>
                </select> <br/>
                <br/>

                <li style={{fontSize:"90%", listStyle:"none"}}>Are either of you menstruating?</li>
                <select id="menstruating" onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="Neither">Neither of us / Not Applicable</option>
                    <option value="Iam">I am & they're not</option>
                    <option value="Theyare">I am not & they are</option>
                    <option value="Bothare">We both are </option>
                </select> <br/>
                <br/>
                
                <li style={{fontSize:"90%", listStyle:"none"}}>If you'd like to add any notes for this, please do so below.</li>
                <input type ="text" id="extranotes" onChange={this.handleChange}/>
                <br/>
                <br/>

                
                <li style={{fontSize:"90%", listStyle:"none"}}>Last but certainly not least, how was it? ;)</li>
                <select id="rating" onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="1">1 Star - It was absolutely horrible</option>
                    <option value="2">2 Stars - They could have done a little better</option>
                    <option value="3">3 Stars - It was as good as I expected it to be</option>
                    <option value="4">4 Stars - It was great. I had tons of fun</option>
                    <option value="5">5 Stars - It was monumentally earthshattering. Definitely up there.</option>
                </select> <br/>
                <br/>
                <br/><br/>
                <input type="submit" value= "Add to LBB" onClick={this.handleSubmitToDatabase}/>
            </form>
        </div>
    </div>
        )}
    };

export default ContactCreate;