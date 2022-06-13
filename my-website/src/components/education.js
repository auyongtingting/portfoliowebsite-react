import { React } from "react"
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit'
import { Card } from "react-bootstrap"

import {GiGraduateCap, GiDiploma} from "react-icons/gi"

// styling
import "../styles/styles.css"
import "../styles/education.css"

export default function Education() {

  return (
    <div id = "education" className = "educationSection">
        
        <MDBContainer>
            <MDBRow className="rowExperience">
                <MDBCol size='lg-6' className='col-education'>
                    <div className="titleEducation">
                        <ion-icon name="school"></ion-icon>
                        <span className="education">Education</span>
                    </div>

                    <Card className = "educationCard">
                        <Card.Body>
                            <Card.Title className="rolePosition" >
                                <GiGraduateCap fontSize="1em" /> Bachelor of Science (Information Systems)
                            </Card.Title>
                            <Card.Subtitle className="location">
                                SINGAPORE MANAGEMENT UNIVERSITY
                            </Card.Subtitle>
                            <Card.Subtitle className="duration">
                                From 2019 to 2023 (Present)
                            </Card.Subtitle>
                            <hr></hr>
                            <Card.Title className="rolePosition" >
                                <GiDiploma fontSize="1em" /> Diploma in Business Information and Technology
                            </Card.Title>
                            <Card.Subtitle className="location">
                                TEMASEK POLYTECHNIC
                            </Card.Subtitle>
                            <Card.Subtitle className="duration">
                                From 2015 to 2019
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </MDBCol>

                <MDBCol size='lg-6' className='col-skill'>
                    <div className="titleEducation">
                        <ion-icon name="code-working-outline"></ion-icon>
                        <span className="education">Skills</span>
                    </div>
                    <Card className = "educationCard">
                        <Card.Body>
                            <Card.Title className="rolePosition" >Skills</Card.Title>
                            <Card.Subtitle className="location">
                                Affinidi | Singapore
                            </Card.Subtitle>
                            <Card.Subtitle className="duration">
                                May 2022 - Aug 2022 (Ongoing)
                            </Card.Subtitle>
                            <hr></hr>
                            <Card.Text>
                        
                            </Card.Text>
                            <Card.Text>
                                Hello world
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
  );
}
