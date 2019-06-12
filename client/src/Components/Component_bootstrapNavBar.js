import React, { Component } from "react";
import { Link } from 'react-router-dom';

import SonOfMan from '../Media/BlogPictures/SonofMan.jpg';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/Home">
                    <img src={SonOfMan} alt="SonOfMan" class="navbar-brand" />
                    BrandonYapel.com
                </a>
                <ul class="navbar-nav " id="navbarSupportedContent"></ul>
                <div class="nav-item">
                    <a class="nav-link" href="/Resume">Résumé</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="/Blog">Blog</a>
                </div>
                <div class="nav-item socialmedia">
                    <a class="nav-link" href="https://www.linkedin.com/in/brandonyapel">
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                </div>
                <div class="nav-item socialmedia">
                    <a class="nav-link" href="https://github.com/brandonyapel">
                        <i class="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                </div>
            </nav>
        )
    }
}

