import emailjs from "emailjs-com"
import "../styles/contactme.css"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import {BiMailSend, BiReset} from 'react-icons/bi'

const Mailer = () => {

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_5l2omrt','template_1ixji6r',e.target, 'tHRhFfJOeAkFybXgi').then(res=> {
      console.log(res);
    }).catch(err=>console.log(err));
  }

  return (
    <div id="contact" className="contactMeSection">
      <div className="SectionTitle">
          <ion-icon name="logo-wechat" color="white"></ion-icon>
          <span className="contactMeTitle">Contact Me</span>
      </div>

      <Form className="contactmeForm" onSubmit={sendEmail}>
        <Form.Group className="nameField mb-3" controlId="formBasicName">
          <Form.Label className="fieldName">Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Please enter your name" />
        </Form.Group>

        <Form.Group className="emailField mb-3" controlId="formBasicEmail">
          <Form.Label className="fieldName">Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Please enter your email" />
        </Form.Group>

        <Form.Group className="subjectField nameField mb-3" controlId="formBasicSubject">
          <Form.Label className="fieldName">Subject</Form.Label>
          <Form.Control type="text" name="subject" placeholder="Please enter the subject" />
        </Form.Group>

        <div class="form-group">
          <label for="exampleFormControlTextarea1" className="fieldName" >Message</label>
          <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="4" placeholder="Please enter your message"></textarea>
        </div>

        <Button className="contactBtn" variant="primary" type="submit" value="send">
          <BiMailSend fontSize="1.5em" /> Contact
        </Button>

        <Button className="resetBtn" variant="primary" type="reset" value="send">
          <BiReset fontSize="1.3em" /> 
          <span className="resetText"> Reset</span>
        </Button>

      </Form>
    </div>
  )
}

export default Mailer;