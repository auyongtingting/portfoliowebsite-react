import { React } from "react"
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit'
import { Card } from "react-bootstrap"

import {GiGraduateCap, GiDiploma} from "react-icons/gi"
import {FaGithub, Falinkedin, FaHtml5, FaStripeS, FaBootstrap, FaAws, FaNodeJs, FaReact, FaDocker, FaPython, FaJoomla, FaGit} from "react-icons/fa"
import {SiAdobephotoshop, SiCss3, SiPhp, SiMongodb, SiJavascript, SiPostgresql, SiKubernetes, SiJira, SiRstudio} from "react-icons/si"
import {IoLogoWordpress} from "react-icons/io"
import {GrMysql} from "react-icons/gr"
import {FiGitlab} from 'react-icons/fi'
import {CgFigma} from 'react-icons/cg'

// styling
import "../styles/education.css"

export default function Education() {

  return (
    <div id = "education" className = "educationSection">
        
        <MDBContainer>
            <MDBRow className="rowExperience">
                <MDBCol size='md-4' className='col-education'>
                    <Card.Title>
                        <div className="titleEducation">
                            <ion-icon name="school"></ion-icon>
                            <span className="education">Education</span>
                        </div>
                    </Card.Title>
                    <Card className = "educationCard">
                        <Card.Body>
                            <Card.Title className="institution" >
                                <GiGraduateCap fontSize="1em" />  Singapore Management University
                            </Card.Title>
                            <Card.Subtitle className="qualification">
                                Bachelor of Science (Information Systems)
                            </Card.Subtitle>
                            <Card.Subtitle className="duration">
                                From 2019 to 2023 (Present)
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>

                    <Card className = "educationCard">
                        <Card.Body>
                            <Card.Title className="institution" >
                                <GiDiploma fontSize="1em" /> Temasek Polytechnic
                            </Card.Title>
                            <Card.Subtitle className="qualification">
                                Diploma in Business Information and Technology
                            </Card.Subtitle>
                            <Card.Subtitle className="duration">
                                From 2015 to 2019
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </MDBCol>

                <MDBCol size='md-4' className='col-extra'></MDBCol>

                <MDBCol size='md-4' className='col-skill'>
                    <div className="titleEducation">
                        <ion-icon name="code-working-outline"></ion-icon>
                        <span className="education">Skills</span>
                    </div>
                    <Card className = "techCard">
                        <Card.Body className="skills">
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1em" /> HTML
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <SiCss3 color="white" fontSize="1em" /> CSS
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaBootstrap color="white" fontSize="1em" /> 
                                    <span className="techAlignment"> Bootstrap</span>
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaReact color="white" fontSize="1em" /> React
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <CgFigma color="white" fontSize="1em" /> Figma
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <SiPhp color="white" fontSize="1em" /> PHP
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <SiJavascript color="white" fontSize="1em" /> 
                                    <span className="techAlignment"> JavaScript</span>
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaPython color="white" fontSize="1em" /> Python
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <SiRstudio color="white" fontSize="1em" /> R
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <SiPostgresql color="white" fontSize="1em" /> MySQL
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaGithub color="white" fontSize="1em" /> 
                                    <span className="techAlignment"> GitHub</span>
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FiGitlab color="white" fontSize="1em" /> GitLab
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <SiJira color="white" fontSize="1em" /> Jira
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
