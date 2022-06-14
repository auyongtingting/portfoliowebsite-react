// styling
import "../styles/footer.css"

//icons
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }

  return (
    <div className="footerSection">
        <span className="footerContent">
            <AiOutlineCopyrightCircle color="white" fontSize="1.5em" />
            <span className="footerText"> AYTT</span>
        </span>
    </div>
  );
}
