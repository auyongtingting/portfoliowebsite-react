import React from 'react'
import '../styles/resumeBtn.css'

const DownloadButton = (props) => {
  return (
    <button className='bg-600 font-[Poppins] py-2 px-6 md:ml hover:duration-500'>
      {props.children}
    </button>
  )
}

export default DownloadButton