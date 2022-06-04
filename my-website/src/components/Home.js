import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import DownloadButton from '../components/resumeBtn'
import profilePicture from '../images/profilepic.jpeg'
import pdf from '../resume/AuYongTingTing_Resume.pdf'
// Icons
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

import "../styles/home.css"

export default function Home() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }

  return (
    <div id = "home">
        <MDBContainer>
        <MDBRow>
            <MDBCol size='md' className='col-example'>
            <img src={profilePicture}/>
            </MDBCol>
            <MDBCol size='md' className='col-example'>
            <div class="text">
                <h1>Hi there! I am Au Yong Ting Ting</h1>
                <h2>A Software Engineer</h2>
                <DownloadButton className="button"><a className="downloadResume" href={pdf} download="Resume.pdf">Download Resume</a></DownloadButton>
                <ul>
                    <li className="IntroductionIcons"><FaLinkedin color="#5476B9" fontSize="1.5em"  onClick={()=>openInNewTab("https://www.linkedin.com/in/auyongtingting/")}/></li>
                    <li className="IntroductionIcons"><FaGithub color="#5476B9" fontSize="1.5em" onClick={()=>openInNewTab("https://github.com/auyongtingting")}/></li>
                </ul>             
            </div>
            </MDBCol>
        </MDBRow>
        </MDBContainer>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}
