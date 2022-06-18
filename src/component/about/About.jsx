import React from 'react'
import '../about/about.css'
import ME from '../../assets/PhemeloMotsamai - Content.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>

       <div className="container about__container">
         <div className='about__me'>
           <div className='about__me-image'>
             <img src={ME} alt="About Image" />
           </div>
         </div>

         <div className='about__content'>
           <div className='about__cards'>
        
           </div>
           <h1> About Myself</h1>
          <p>
          I'm writing to express my interest in working as a Junior Developer. I recently earned a Diploma
          in IT Software Development and have good programming experience.I have over the years gathered learning and practical experience from learnerships and 
          internships that earned me foundation experience in Low code engineering and Back End Server-side scripting.
          </p>
          <h1> Why I Want To Work For SovTech</h1>
          <p>
          I have learned to bridge between business requirements and development translation and the 
          importance of developing usable and meaningful software products.
          I want to enhance my skills in
          Custom Software Development Mobile,  Cross-Platform App Development and Cloud Hosting. I believe 
          in SovTech I Will grow and be able to have meaningful skills that will contribute to the company.

          </p>
         </div>
       </div>
      
    </section>
  )
}

export default About