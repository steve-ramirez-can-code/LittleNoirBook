import React, { Component } from 'react';
import  './Styling/Resources.css';

class Resources extends Component{
    render(){
        return(
                <div className = "Resource-Main-Div">
                    <h2>Resources List for any Lingering Questions or Immediate Concerns</h2>
                        <br></br>
                        <h4>Resources for all individuals:</h4>
                            <ul style={{listStyleType:"none"}}>
                                <li >
                                    <a href="http://www.healthtalk.org/young-peoples-experiences/sexual-health/topics"> Information for All General Sex Questions (First time, how to be safe, birth control, etc)</a>  
                                </li>
                            </ul>
                        <h4>Resources for Domestic Abuse/Violence Victims:</h4>
                            <ul style={{listStyleType:"none"}}>
                                <li>
                                    <a href="https://www.bflnyc.org/programs-services/#freedom-house">Organization Geared Towards People who Suffer from Domestic Violence and are Seeking Refuge</a>
                                </li>
                                <li>
                                    <a href='https://www.voa-gny.org/dv'>Resources for Aid in Dealing with Domestic Violence and Potential Shelter</a>
                                </li>
                            </ul>
                        <h4> Resources for LGBTQ Individuals:</h4>
                            <ul style={{listStyleType:"none"}}>
                                <li>  
                                    <a href="http://www.impactprogram.org/topics/sex-ed/"> Sexual Education Resource for LGBTQ Individuals or Youth</a>
                                </li>
                                <li>
                                    <a href="https://truecolorsfund.org/"> Resources for LGBTQ Youth Experiencing Homelessness and Financial Strife</a>
                                </li>
                                <li>
                                    <a href="https://truecolorsfund.org/"> Resource for The Lesbian, Gay, Bisexual & Transgender Community Center</a>
                                </li>
                            </ul>
                </div>
              
        )}
    }
    

export default Resources;