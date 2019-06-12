import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NavBar from './Component_bootstrapNavBar.js';
import SonOfMan from '../Media/BlogPictures/SonofMan.jpg';


const url = `http://localhost:5000/api`;

const blogArticle = {
  Title: "My First Post",
  Date:  "June 8, 2019",
  Description: "Hello World",
  Content: "<p>HelloWorld!</p>"
}
let array;




export default class BlogArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfArticles: []
    }
  }
  
  getBlogArticles() {
    fetch(`${url}/blogarticles`)
      .then(response => response.json())
      .then(blogArticlesResponseArray => {
        this.setState({
          arrayOfArticles: blogArticlesResponseArray
        })
      })
      .catch(error => console.log(`Error with getBlogArticles Fetch: ${error}`))
  }

  
  render() {
    return (

      <div>
         {blogArticlesResponseArray}
        <NavBar />
        <div class="Jumbotron">

        </div>

       
        <div class="container">
          <div>
            <h1>{}</h1>
            <h2>{}</h2>
            <img src="..." class="img-fluid" alt="Responsive image"></img>
            
          </div>
        </div>
      </div>

    )
  }
}

//<div dangerouslySetInnerHTML={{ __html: }} />