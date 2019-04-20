import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';



//ResumeLogos Begin
//Company Logos
import CHRobinsonLogo from './Media/CompanyLogos/CHR_Logo.png';
import AmazonLogo from './Media/CompanyLogos/amazon-logo.png';
import PrimeLogo from './Media/CompanyLogos/Prime_Logo.png';
import CWLogo from './Media/CompanyLogos/Cushman_Wakefield_Logo.png';
import USTLogo from './Media/CompanyLogos/UST-Logo.svg';

//Technology Logos
import AngularLogo from './Media/Technologies/Angular_Logo.svg';
import BootstrapLogo from './Media/Technologies/Bootstrap_Logo.png';
import CSharpLogo from './Media/Technologies/CSharp_Logo.png';
import CSS3Logo from './Media/Technologies/CSS3_Logo.svg';
import EDILogo from './Media/Technologies/EDI_Logo.png';
import ES6Logo from './Media/Technologies/ES6_Logo.svg';
import GithubLogo from './Media/Technologies/github_Logo.png';
import HerokuLogo from './Media/Technologies/Heroku_Logo.png';
import html5Logo from './Media/Technologies/html5_Logo.png';
import IBMSILogo from './Media/Technologies/IBM_SI_Logo.png';
import JavaLogo from './Media/Technologies/Java_Logo.png';
import jQueryLogo from './Media/Technologies/jQuery-Logo.png';
import MongodbLogo from './Media/Technologies/mongodb_Logo.png';
import NETLogo from './Media/Technologies/NET_Logo.png';
import NodeLogo from './Media/Technologies/nodejs_Logo.png';
import PostgresqlLogo from './Media/Technologies/postgresql-logo.png';
import ReactLogo from './Media/Technologies/React_Logo.png';
import VBALogo from './Media/Technologies/VBA_Logo.png';


//ResumeLogos End

const NavBar = () => {
  return (


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/Home">BrandonYapel.com</a>
      <ul class="navbar-nav " id="navbarSupportedContent"></ul>
      <div class="nav-item">
        <a class="nav-link" href="/Resume">Résumé</a>
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

const Home = () => {
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

const Resume = () => {
  return (
    <div class="homeimage bg">
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


      <div class="container bg-dark text-light resumecontainer">

        <div>
          <h1>Brandon Yapel</h1>
        </div>
        <hr />
        <div>
          <h2>Technical Skills:</h2>
          <div class="row">
            <div class="col-md-4 SkillsListContainer card-body">
              <ul>
                <h6>Front End Web Development:</h6>
                <li>ReactJS</li>
                <li>AngularJS</li>
                <li>$http</li>
                <li>jQuery</li>
                <li>$ajax</li>
                <li>Chart.js</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div class="col-md-4 SkillsListContainer card-body">
              <ul>
                <h6>Back End Web Development:</h6>
                <li>MongoDB</li>
                <li>PostgresSQL</li>
                <li>Node.js</li>
                <li>Robo3T</li>
                <li>Postico</li>
                <li>Mlab</li>
                <li>Express</li>
              </ul>
            </div>

            <div class="col-md-4 SkillsListContainer card-body">
              <ul>
                <h6>Programming Languages:</h6>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript ES6</li>
                <li>Java</li>
                <li>C#</li>
                <li>Visual Basic for Applications (VBA)</li>
                <li>XML</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-4 SkillsListContainer card-body">
              <ul>
                <h6>Electronic Data Interchange:</h6>
                <li>Sterling Integrator</li>
                <li>X12 ANSI Standards</li>
                <li>EDIFACTS</li>
                <li>iDOC</li>
                <li>Navisphere</li>
                <li>API</li>
              </ul>
            </div>
            <div class="col-md-4 SkillsListContainer card-body">
              <ul>
                <h6>Other Technologies:</h6>
                <li>Github</li>
                <li>Heroku</li>
                <li>Microsoft Excel VBA Programming</li>
                <li>Microsoft Visio</li>
                <li>Visual Studio 2019</li>
                <li>.NET Development</li>
                <li>Robotic Process Automation, Kofax Kapow</li>
              </ul>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
        <hr />

        <div>
          <h2>Experience:</h2>
          <div class="row">

            <div class="col card-body">
              <img src={CHRobinsonLogo} alt="CH Robinson" class="col-md-2 card-body" />
              <h6>C. H. Robinson, Eden Prairie MN<br />Customer Integration Team (CIT), North American Surface Transportation (NAST)<br />EDI Developer<br />March 2018 – Present</h6>
              <ul>
                <li>Collaborated with Business Analysts and Developers within the Dynamo Agile Delivery team, to develop, test, document and implement EDI solutions.</li>
                <li>Mapped Customer data and C.H. Robinson Data into X12, EDIFACTS, IDOC, Flatfile, CSV, XML formats using Sterling Integrator for Inbound and Outbound Customer Transactions.</li>
                <li>Performed Unit testing, System Integration testing and supported User Acceptance Testing related to each project deliverable.</li>
                <li>Produced technical documents such as key configuration and data flow diagrams.</li>
                <li>Enhanced Internal EDI Tool Software</li>
                <ul>
                  <li>EDI Automated setup tool – Tool that allows for automated quick setup of standardized EDI flows for Customers.  204-Load Tender, 210-Invoice, 214-Status Update, 990-Response to Load Tender.</li>
                  <li>Lodestar Finder – A feature that allows quick search to find the last documented data flow diagram.</li>
                  <li>EDI Tool End To End Tracking – An Efficient/Timely search of the Data flow of an EDI document through Pick up and Drop off in the Sterling Integrator Server.</li>
                </ul>
                <li>Technologies:</li>
                <ul>
                  <li>Sterling Integrator,  Visual Studio, Microsoft SQL Server Management Studio, Java, C#, VBA, Excel, Visio, Navisphere, X12, EDIFACTS, IDOC, SAP, XML, CSV, SQL</li>
                </ul>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col card-body">
              <img src={PrimeLogo} alt="Prime Digital Academy" class="col-md-2 card-body card-body" />
              <h6>Prime Digital Academy,  Minneapolis MN <br />Full Stack Development Student <br /> September 2017 – February 2018 </h6>
              <ul>
                <h7>• MEAN Appetizer, Individual Project</h7>
                <ul>
                  <li> Allows MEAN-Stack developers to generate a starter full stack app with ability to Create, Refresh, Update and Delete within a DOM table.</li>
                  <li>Planning Process of creating wireframe,mapped database,and created report for client/instructor approval.</li>
                  <li>Developed in an Agile framework working through stages of features,including a Minimal Viable Product, Base, and Advanced phase.</li>
                  <li>Completed project through stretch features including ability to register user,login, generate a minimal base project, generate an advance project, and generate live previews of app based on inputs. Additionally, users are able to edit code, copy, save project, and download a zip file of project.</li>
                  <li>Presented Live Demo of app to an audience of 80+ tech professionals.</li>
                  <li>Technologies</li>
                  <ul>
                    <li>MEANStack, MongoDB, ExpressAngularJS, Node.js, PostgresSQL, Postico, Robo3T, HTML 5, CSS 3, Bootstrap, JavaScript ES6, FileSaver, JSZip</li>
                  </ul>
                  <li>Repository: <a href="https://github.com/brandonyapel/MEAN_Appetizer">https://github.com/brandonyapel/MEAN_Appetizer</a></li>
                </ul>
              </ul>
              <ul>
                <img src={CWLogo} alt="CH Robinson" class="col-md-2 card-body" />
                <br />
                <h7>• Cushman & Wakefield “Diagnose Your People” Survey App, Group Project</h7>
                <ul>
                  <li>Cushman & Wakefield is a commercial real-estate company that uses manual surveys to collect data for themselves and decision makers at client companies to analyze what space fits their employees best.</li>
                  <li>Scoped out a wire-frame, database, report and pitched idea to a C&W Director to get approval for project.</li>
                  <li>Features include a “Create Survey” tool that generates a survey to be distributed, a responsive survey, an admin page for C&W staff to manage surveys, and a data dashboard that compiles responses into actionable data.</li>
                  <li>Technologies</li>
                  <ul>
                    <li>PostgreSQL, Express, AngularJS, Node.js, Postico, HTML5, CSS 3, Bootstrap, JavaScript ES6, Filestack, Chart.js, Google Maps API</li>
                  </ul>
                  <li>Repository: <a href="https://github.com/JWales13/Cushman_Wakefield_Diagnose_My_People">https://github.com/JWales13/Cushman_Wakefield_Diagnose_My_People</a></li>
                </ul>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col card-body">
              <img src={AmazonLogo} alt="Amazon.com" class="col-md-2 card-body" />
              <h6>Amazon CHA2 Fulfillment Center, Charleston TN <br />Area Manager<br /> July 2014 – July 2017</h6>
              <ul>
                <li>Area Managed CHA2 Inbound Each Receive, Transship, Prep Receive, and Each Stow value Streams.</li>
                <li>Performance Managed Team of 60-100 associates, to achieve top Non-Sort ER Units per Labor Hour in network of 67units per labor hour, and lowest inventory defect rate in network.</li>
                <li>Kaizen events for rapid improvement targeting Transship Quality, Prep Productivity, and Each Receive Sort Efficiency.</li>
                <li>Led team to Zero Time off Safety Incidents, 2 year reigning Safety Save Champions, CHA2 1,000,000 hours without time off Safety Incident.</li>
                <li>Created Automated Standard Work Excel Sheets for CHA2 managers including Daily Wash/Plan, Empty bin tracker, Fast Start Production-Tracker, VTO Randomizer</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col card-body">
              <h6>Independent School District 622 Community Education Aquatics, Oakdale Minnesota<br />Head Water Safety Instructor and Head Lifeguard <br /> July 2014 – July 2017</h6>
              <ul>
                <li>Trained early, intermediate, and advanced swimmers in the skills of swimming, diving, and aquatic survival.</li>
                <li>Assessed students on various water skills such as swim strokes, diving, and first aid.</li>
                <li>Led lifeguard team in practicing and performing Emergency Action Plan to save lives.</li>
                <li>Maintained Red Cross certifications in First Aid, CPR/AED, Water Safety Instructor and Lifeguard.</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>Education:</h2>
          <div class="row">
            <div class="col card-body">
              <img src={PrimeLogo} alt="Prime Digital Academy" class="col-md-2 card-body" />
              <h6>Prime Digital Academy, Minneapolis,<br /> MN Full Stack Software Engineering Certification <br />  Graduation, March 2018</h6>
            </div>
          </div>
          <div class="row">
            <div class="col card-body">
              <img src={USTLogo} alt="University of Saint Thomas" class="col-md-2 card-body" />
              <h6>University of St. Thomas, St. Paul, MN<br /> Major: Operations and Supply Chain Management<br />Graduation, May 2014</h6>
              <ul>
                <h7>Honors and Activities:</h7>
                <ul>
                  <li>President and Founder of UST YAL</li>
                  <li>Liturgical Choir Tenor</li>
                  <li>Supply Chain Club</li>
                  <li>Investment Club</li>
                  <li>APICS</li>
                  <li>TS Business Major Field Testing score 173 (99th percentile)</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h2>Community Involvement:</h2>
          <ul>
            <li>Knights of Columbus</li>
            <li>Eagle Scout</li>
            <li>Co-Project Manager Indian Motorcycle Charity Ride UST Business 200</li>
          </ul>
        </div>
        <hr />
        <div>
          <img src={AngularLogo} alt="Angular" class="col-md-2 card-body" />
          <img src={BootstrapLogo} alt="Bootstrap" class="col-md-2 card-body" />
          <img src={CSS3Logo} alt="Css3" class="col-md-2 card-body" />
          <img src={CSharpLogo} alt="C#" class="col-md-2 card-body" />
          <img src={EDILogo} alt="EDI" class="col-md-2 card-body" />
          <img src={ES6Logo} alt="ES6 JavaScript" class="col-md-2 card-body" />
          <img src={GithubLogo} alt="Github" class="col-md-2 card-body" />
          <img src={HerokuLogo} alt="Heroku" class="col-md-2 card-body" />
          <img src={html5Logo} alt="HTML5" class="col-md-2 card-body" />
          <img src={IBMSILogo} alt="IBM Sterling Integrator" class="col-md-2 card-body" />
          <img src={JavaLogo} alt="Java" class="col-md-2 card-body" />
          <img src={jQueryLogo} alt="jQuery" class="col-md-2 card-body" />
          <img src={MongodbLogo} alt="Mongodb" class="col-md-2 card-body" />
          <img src={NETLogo} alt=".NET" class="col-md-2 card-body" />
          <img src={NodeLogo} alt="Node.js" class="col-md-2 card-body" />
          <img src={PostgresqlLogo} alt="Postrgesql" class="col-md-2 card-body" />
          <img src={ReactLogo} alt="React" class="col-md-2 card-body" />
          <img src={VBALogo} alt="VBA" class="col-md-2 card-body" />
        </div>
        <br />
      </div>
    </div>

  )
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Route path="/Home" component={Home} />
        <Route path="/Resume" component={Resume} />
      </BrowserRouter>
    );
  }
}

export default App;
