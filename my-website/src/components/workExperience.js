import { React} from "react"
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit'
import { Card } from "react-bootstrap"

// styling
import "../styles/styles.css"
import "../styles/home.css"
import "../styles/workexperience.css"

// Icons
import {SiAdobephotoshop, SiCss3, SiPhp, SiMongodb, SiJavascript, SiPostgresql, SiKubernetes} from "react-icons/si"
import {IoLogoWordpress} from "react-icons/io"
import {FaGithub, Falinkedin, FaHtml5, FaStripeS, FaBootstrap, FaAws, FaNodeJs, FaReact, FaDocker, FaPython, FaJoomla} from "react-icons/fa"
import {GrMysql} from "react-icons/gr"
import {FiGitlab} from 'react-icons/fi'

export default function workExperience() {

  return (
    <div id = "workexperience" className = "workExperienceSection">
        <div className="SectionTitle">
            <ion-icon name="briefcase" color="white"></ion-icon>
            <span className="briefcase">Work Experience</span>
        </div>

        <MDBContainer>
            <MDBRow className="rowExperience">
                <MDBCol size='md-4' className='col-example'>
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
                            <Card.Text>
                                <span className="Technologies">Technologies Utilised</span>
                                <br></br>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <SiJavascript color="white" fontSize="1em" /> JavaScript
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FaHtml5 color="white" fontSize="1em" /> HTML
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <SiCss3 color="white" fontSize="1em" /> CSS
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FaReact color="white" fontSize="1em" /> React
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FaBootstrap color="white" fontSize="1em" /> Bootstrap
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FaNodeJs color="white" fontSize="1em" /> NodeJS
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <SiMongodb color="white" fontSize="1em" /> Mongodb
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FiGitlab color="white" fontSize="1em" /> Gitlab
                                    </span>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </MDBCol>

                <MDBCol size='md-4' className='col-example'>
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
                                <br></br>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FaPython color="white" fontSize="1em" /> Python
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <GrMysql color="white" fontSize="1em" /> SQL
                                    </span>
                                </div>
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
                            <div class="box-content" className="box-content">
                                <span className="techstack">
                                    <FaPython color="white" fontSize="1em" /> Python
                                </span>
                            </div>
                            <div class="box-content" className="box-content">
                                <span className="techstack">
                                    <FaGithub color="white" fontSize="1em" /> GitHub
                                </span>
                            </div>
                            <div class="box-content" className="box-content">
                                <span className="techstack">
                                    <GrMysql color="white" fontSize="1em" /> MySQL
                                </span>
                            </div>
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
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <SiPhp color="white" fontSize="1em" /> PHP
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <SiJavascript color="white" fontSize="1em" /> JavaScript
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FaHtml5 color="white" fontSize="1em" /> HTML
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <SiCss3 color="white" fontSize="1em" /> CSS
                                    </span>
                                </div>
                                <div class="box-content" className="box-content">
                                    <span className="techstack">
                                        <FaBootstrap color="white" fontSize="1em" /> Bootstrap
                                    </span>
                                </div>
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
                            <div class="box-content" className="box-content">
                                <span className="techstack">
                                    <SiAdobephotoshop color="white" fontSize="1em" /> Adobe Photoshop
                                </span>
                            </div>
                            <div class="box-content" className="box-content">
                                <span className="techstack">
                                    <IoLogoWordpress color="white" fontSize="1em" /> WordPress
                                </span>
                            </div>
                            <div class="box-content" className="box-content">
                                <span className="techstack">
                                    <FaJoomla color="white" fontSize="1em" /> Joomla
                                </span>
                            </div>
                            <div class="box-content" className="box-content">
                                <span className="techstack">
                                    <FaStripeS color="white" fontSize="1em" /> Stripe
                                </span>
                            </div>
                        </Card.Body>
                    </Card>
                </MDBCol>
            </MDBRow>
        </MDBContainer>


    </div>
  );
}
