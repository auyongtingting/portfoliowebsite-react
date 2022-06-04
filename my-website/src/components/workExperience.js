import { React, useState } from "react"
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit'
import { Card } from "react-bootstrap"

// styling
import "../styles/styles.css"
import "../styles/home.css"

// Icons
import {SiAdobephotoshop, SiCss3, SiPhp, SiMongodb, SiJavascript, SiPostgresql, SiKubernetes} from "react-icons/si"
import {IoLogoWordpress} from "react-icons/io"
import {FaGithub, Falinkedin, FaHtml5, FaStripeS, FaBootstrap, FaAws, FaNodeJs, FaReact, FaDocker, FaPython, FaJoomla} from "react-icons/fa"
import {GrMysql} from "react-icons/gr"
import {AiFillCheckCircle} from "react-icons/ai"
import {FiGitlab} from 'react-icons/fi'

export default function workExperience() {

  return (
    <div id = "workexperience" className = "workExperience">
     <div className="SectionTitle">
            <ion-icon name="briefcase" color="white"></ion-icon>
            <span className="briefcase">Work Experience</span>
        </div>

        <MDBContainer>
            <MDBRow className="rowExperience">
              <MDBCol size='lg-4' className='col-example'>
              <Card className = "experienceCard">
                <Card.Body>
                  <Card.Title className="rolePosition" >Software Engineer Intern</Card.Title>
                  <Card.Subtitle className="location">
                    Affinidi | Singapore
                  </Card.Subtitle>
                  <Card.Subtitle className="duration">
                    May 2022 - Aug 2022 (Ongoing)
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Text>
                    <ul class="checkmark">
                        <li>Developed self-sovereign identity (SSI) solutions, empowering individuals and organizations with control of their data</li>
                        <li>Worked alongside top engineers to gain invaluable insights on scalable and high-performance software platforms</li>
                        <li>Adopted Agile scrum methodology with weekly sprints</li>
                    </ul>
                  </Card.Text>
                  <span className="Technologies">Technologies Utilised</span>
                    <br></br>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><SiJavascript color="white" fontSize="0.8em" /></li>
                            <li className="TechName">JavaScript</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaHtml5 color="white" fontSize="1em" /></li>
                            <li className="TechName">HTML</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><SiCss3 color="white" fontSize="1em" /></li>
                            <li className="TechName">CSS</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaReact color="white" fontSize="1em" /></li>
                            <li className="TechName">React</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaBootstrap color="white" fontSize="1em" /></li>
                            <li className="TechName">Bootstrap</li>
                        </ul>
                    </span>
                    
                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaNodeJs color="white" fontSize="1em" /></li>
                            <li className="TechName">NodeJS</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><SiMongodb color="white" fontSize="1em" /></li>
                            <li className="TechName">Mongodb</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FiGitlab color="white" fontSize="1em" /></li>
                            <li className="TechName">Gitlab</li>
                        </ul>
                    </span>

                </Card.Body>
              </Card>
              </MDBCol>
              <MDBCol size='lg-4' className='col-example'>
              <Card className = "experienceCard">
                <Card.Body>
                  <Card.Title className="rolePosition">Regional Projects and Data Analytics Intern</Card.Title>
                  <Card.Subtitle className="location">
                    Shopee | Singapore
                  </Card.Subtitle>
                  <Card.Subtitle className="duration">
                    Aug 2021 - Dec 2021
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Text>
                    <ul class="checkmark">
                        <li>Analysed and monitored operational key performance indicators across the region (including logistics, payment, customer satisfaction, listing, etc.)</li>
                        <li>Conducted root cause analysis when operations performance fluctuates</li>
                        <li>Developed Python and SQL scripts for continuous improvements for systems and processes based on the understanding of current systems’ capabilities and limitations</li>
                    </ul>
                  </Card.Text>
                  <span className="Technologies">Technologies Utilised</span>
                    <br>
                    </br>
                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaPython color="white" fontSize="1em" /></li>
                            <li className="TechName">Python</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><GrMysql color="white" fontSize="1em" /></li>
                            <li className="TechName">SQL</li>
                        </ul>
                    </span>
                </Card.Body>
              </Card>
              </MDBCol>
              <MDBCol size='lg-4' className='col-example'>
                <Card className = "experienceCard">
                  <Card.Body>
                    <Card.Title className="rolePosition">Data Scientist Intern</Card.Title>
                    <Card.Subtitle className="location">
                      Galen Growth | Singapore
                    </Card.Subtitle>
                    <Card.Subtitle className="duration">
                      May 2021 - Aug 2021
                    </Card.Subtitle>
                    <hr></hr>
                    <Card.Text>
                      <ul class="checkmark">
                          <li>Utilisation of analytical and technical expertise to provide insights and proposals to support business improvements</li>
                          <li>Creation of Python scripts for data collections, cleaning, and pre-processing from websites</li>
                          <li>Developed algorithms using Natural Language Processing and Machine Learning Techniques for Descriptive and Predictive analysis</li>
                          <li>Worked with Database Administration team to develop and enhance database standard</li>
                      </ul>
                    </Card.Text>

                    <span className="Technologies">Technologies Utilised</span>
                    <br>
                    </br>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaPython color="white" fontSize="1em" /></li>
                            <li className="TechName">Python</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaGithub color="white" fontSize="1em" /></li>
                            <li className="TechName">GitHub</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><GrMysql color="white" fontSize="1em" /></li>
                            <li className="TechName">MySQL</li>
                        </ul>
                    </span>

                  </Card.Body>
                </Card>
              </MDBCol>
            </MDBRow>            
          </MDBContainer>

          <MDBContainer>
          <MDBRow className="rowExperience">
              <MDBCol size='md-4' className='col-example'>
              <Card className = "experienceCard">
                <Card.Body>
                  <Card.Title className="rolePosition">Web Application Developer Intern</Card.Title>
                  <Card.Subtitle className="location">
                    Alkem | Singapore
                  </Card.Subtitle>
                  <Card.Subtitle className="duration">
                    Jun 2020 - Feb 2021
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Text>
                    <ul class="checkmark">
                        <li>Utilised HTML, CSS, and PHP to develop a full stacked e-book redemption website with visually appealing, user-friendly interactive features/functionalities to optimize user experience</li>
                        <li>Developed structured database that supports the website application</li>
                        <li>Created thorough documentation to assist future DevOps Engineers with smooth deployment</li>
                    </ul>
                  </Card.Text>

                  <span className="Technologies">Technologies Utilised</span>
                    <br></br>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><SiPhp color="white" fontSize="1em" /></li>
                            <li className="TechName">PHP</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><SiJavascript color="white" fontSize="0.8em" /></li>
                            <li className="TechName">JavaScript</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaHtml5 color="white" fontSize="1m" /></li>
                            <li className="TechName">HTML</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><SiCss3 color="white" fontSize="1em" /></li>
                            <li className="TechName">CSS</li>
                        </ul>
                    </span>

                    <span className="Tech_Box">
                        <ul className="tech">
                            <li className="TechIcons"><FaBootstrap color="white" fontSize="1em" /></li>
                            <li className="TechName">Bootstrap</li>
                        </ul>
                    </span>

                </Card.Body>
              </Card>
              </MDBCol>
              <MDBCol size='md-4' className='col-example'>
              <Card className = "experienceCard">
                <Card.Body>
                  <Card.Title className="rolePosition">Website Designer Intern</Card.Title>
                  <Card.Subtitle className="location">
                    Lighthouse Independent Media | Singapore
                  </Card.Subtitle>
                  <Card.Subtitle className="duration">
                    May 2019 - Dec 2019
                  </Card.Subtitle>
                  <hr></hr>
                  <Card.Text>
                    <ul class="checkmark">
                        <li>In charge of designing e-payment gateway websites for awards and conferences using Stripe</li>
                        <li>Planning site designs, functionality, and navigation, along with audience funnels and data capture points</li>
                        <li>Managing migration and maintenance of websites</li>
                    </ul>
                  </Card.Text>

                  <span className="Technologies">Technologies Utilised</span>

                  <br></br>

                  <span className="Tech_Box">
                      <ul className="tech">
                          <li className="TechIcons"><SiAdobephotoshop color="white" fontSize="1em" /></li>
                          <li className="TechName">Adobe Photoshop</li>
                      </ul>
                  </span>

                  <span className="Tech_Box">
                      <ul className="tech">
                          <li className="TechIcons"><IoLogoWordpress color="white" fontSize="0.7em" /></li>
                          <li className="TechName">WordPress</li>
                      </ul>
                  </span>

                  <span className="Tech_Box">
                      <ul className="tech">
                          <li className="TechIcons"><FaJoomla color="white" fontSize="0.7em" /></li>
                          <li className="TechName">Joomla</li>
                      </ul>
                  </span>

                  <span className="Tech_Box">
                      <ul className="tech">
                          <li className="TechIcons"><FaStripeS color="white" fontSize="0.7em" /></li>
                          <li className="TechName">Stripe</li>
                      </ul>
                  </span>

                </Card.Body>
              </Card>
              </MDBCol>
            </MDBRow>
          </MDBContainer>


    </div>
  );
}