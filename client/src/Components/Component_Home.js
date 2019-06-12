import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NavBar from './Component_bootstrapNavBar.js';

import SonOfMan from '../Media/BlogPictures/SonofMan.jpg';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            
        }
    }
    render() {
        return (



                  <div>
                    <header className="App-header" class="homeimage bg">
                      <div id="foglayer_01" class="fog bg">
                        <div class="image01"></div>
                        <div class="image02"></div>
                      </div>
                      <div id="foglayer_02" class="fog bg">
                        <div class="image01"></div>
                        <div class="image02"></div>
                      </div>
                      <div id="foglayer_03" class="fog bg">
                        <div class="image01"></div>
                        <div class="image02"></div>
                      </div>
                      <NavBar />
                    </header>
                  </div>

        )
    }
}

