import React, { Component } from 'react';
import  '../App.css';
import {Route, Switch, Link, Redirect} from 'react-router-dom';
import axios from "axios";

class Resources extends Component{
    render(){
        return(
                <div id = "Resource-Main-Div">
                  <h2>Resources List for any Lingering Questions or Immediate Concerns</h2>
                  <h3>Resources for all individuals:</h3>
                  <ul>
                    <li>
                      <a href="http://www.healthtalk.org/young-peoples-experiences/sexual-health/topics"> Information for All General Sex Questions (First time, how to be safe, birth control, etc)</a>  
                    </li>
                  </ul>
                  <h3>Resources for Women:</h3>
                  <ul>
                    <li>
                      <a href="https://www.womenhelpingwomen.org/"> Organizations Geared Towards Women who Suffer from Domestic Violence</a>
                    </li>
                  </ul>
                  <h3> Resources for LGBTQ Individuals:</h3>
                    <ul>
                    <li>  
                      <a href="http://www.impactprogram.org/topics/sex-ed/"> Sexual Education Resources for LGBTQ Individuals or Youth</a>
                    </li>
                    <li>
                      <a href="https://truecolorsfund.org/"> Resources for LGBTQ Youth Experiencing Homelessness and Financial Strife</a>
                    </li>
                  </ul>
                </div>
              
        )}
    }
    

export default Resources;