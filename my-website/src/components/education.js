import { React } from "react"
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit'
import { Card } from "react-bootstrap"

import {GiGraduateCap, GiDiploma} from "react-icons/gi"
import {FaGithub, Falinkedin, FaHtml5, FaStripeS, FaBootstrap, FaAws, FaNodeJs, FaReact, FaDocker, FaPython, FaJoomla} from "react-icons/fa"

// styling
import "../styles/education.css"

export default function Education() {

  return (
    <div id = "education" className = "educationSection">
        
        <MDBContainer className="test">
            <MDBRow className="rowExperience">
                <MDBCol size='md-4' className='col-education'>
                    <div className="titleEducation">
                        <ion-icon name="school"></ion-icon>
                        <span className="education">Education</span>
                    </div>

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

                <MDBCol size='md-4' className='col-education'></MDBCol>

                <MDBCol size='md-4' className='col-skill'>
                    <div className="titleEducation">
                        <ion-icon name="code-working-outline"></ion-icon>
                        <span className="education">Skills</span>
                    </div>
                    <Card className = "techCard">
                        <Card.Body className="skills">
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> HTML
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> CSS
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> Bootstrap
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> React
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> Figma
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> PHP
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> JavaScript
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> Python
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> R
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> MySQL
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> GitHub
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> GitLab
                                </span>
                            </div>
                            <div class="techbox-content" className="techbox-content">
                                <span className="skillStack">
                                    <FaHtml5 color="white" fontSize="1.5em" /> Jira
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
