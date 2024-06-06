import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'
const InfoBox = ({text,link,btnText}) =>(
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
    </Link>
  </div>
)
const renderContent ={
  1:(
    <div style={{display:"flex",flexDirection:"column"}}>
    <h1 className='text-gray-300 text-5xl font-bold'>Hi I am <span className='font-extrabold'>Nirai</span>👨‍💻
    </h1>
    <h1  className='text-gray-300'>
    A Frontend Developer 
    </h1>
    </div>
  ),
  2:(
    <InfoBox
    text="Worked with many programming languages and picked up many skills along the way"
    link="/about"
    btnText="Learn more about me"
    />
  ),
  3:(
    <InfoBox
    text="Hands-on on many realtime projects over the years. Curious about my works?"
    link="/projects"
    btnText="Visit my portfolio"
    />
  ),
  4:(
    <InfoBox
    text="Need a project done or looking for a developer? I'm just a few keystrokes away"
    link="/contact"
    btnText="Let's talk"
    />
  )
}
const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo