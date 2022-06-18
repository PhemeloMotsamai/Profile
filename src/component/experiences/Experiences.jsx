import React from 'react'
import '../experiences/experiences.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
export const Experiences = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className='text-light'></small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className='text-light'></small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className='text-light'></small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>React</h4>
              <small className='text-light'></small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Alpha Transform</h4>
              <small className='text-light'></small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className='text-light'></small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Wordpress</h4>
              <small className='text-light'></small>
            </article>
          </div>
        </div> 
        {/*END OF FRONTEND*/}

        <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
        <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'></small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JAVA EE</h4>
              <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL Database</h4>
              <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MS SQL Server</h4>
              <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Docker</h4>
              <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JSP and Sevlet</h4>
              <small className='text-light'></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>APIs</h4>
              <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Android Development JAVA</h4>
              <small className='text-light'></small>
              </div>
            </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences