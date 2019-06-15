import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NavBar from './Component_bootstrapNavBar.js';
import SonOfMan from '../Media/BlogPictures/SonofMan.jpg';


const url = `http://localhost:5000/api`;

const blogArticle = {

  Title: "My First Post",
  Date: "June 8, 2019",
  Description: "Hello World",
  Content: "<p>HelloWorld!</p>"
}
let array;

export default class BlogArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogarticles: []
    }
  }

  componentDidMount() {
    fetch('/api/blogarticles')
      .then(res => res.json())
      .then(blogarticles => this.setState({ blogarticles }, () => console.log("Articles fetched...", blogarticles)));

  }

  // postgres schema 
  // article_id serial PRIMARY KEY,
  // title varchar(256),
  // posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
  // description varchar(256),
  // article_content varchar(100000)

  render() {
    return (

      <div>

        <NavBar />
        <div class="Jumbotron">

        </div>


        <div class="container">
          <div>

            {this.state.blogarticles.map(article =>
              <div>
                <h1 key={article.article_id}>{article.title}</h1>
                <h2 key={article.article_id}>{article.description}</h2>
                {/*<h4 key={article.article_id}>{article.posting_date}</h4>*/}
                <div dangerouslySetInnerHTML={{ __html: article.article_content }} />
              </div>
            )}
          </div>
        </div>
      </div>

    )
  }
}
