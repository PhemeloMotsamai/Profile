import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


export const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/phemelo-motsamai-862399204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvKGc0WIsRGSprsdUn1t3jg%3D%3D' target="_blank"><BsLinkedin /><h3>Linked in</h3></a>
        <a href='https://github.com/PhemeloMotsamai/Profile' target="_blank"><FaGithub /><h3>Git Hub</h3></a>
    </div>
  )
}

export default Headersocials