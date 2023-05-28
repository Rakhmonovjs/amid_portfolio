import React from 'react'
import './Home.css'
import girl from '../../assets/girl.png'
import Hero from '../Hero/Hero'
import Content from '../Content/Content'

const Home = () => {
  return (
    <div>
      <div className='home'>
          <div className='it_works'><span className='it_works_in'>It works</span></div>
        <h2 className='try'>Try Our Business Ideas to grow Rapidly </h2>
        <p className='description'>We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan </p>
        <h3 className=''> <img src={girl} alt="Rasm" className='foto' /></h3>
        <h3 className='get_started'>
          <span className='get_started_in'>
            Get Started
          </span>
        </h3>
          <div>
            <p className='play'>
              <span className='play_in'>
              </span>
            </p>
            <p className='demo_video'>
              Demo Video
            </p>
          </div>
          <div className='big_rectangle'>
              <p className='yellow_rectangle'>
                <span>
                  <a>

                  </a>
                </span>
              </p>
              <p className='green_rectangle'>
                <span>
                  <a>

                  </a>
                </span>
              </p>
              <p className='blue_rectangle'>
                <span>
                  <a>
                      
                  </a>
                </span>
              </p>     
              <p className='orange_rectangle'>
                <span>
                  <a>
                      
                  </a>
                </span>
              </p>
          </div>
          <div> 
              <p className='green_point'></p>
              <p className='orange_point'></p>
              <p className='yellow_point'></p>
              <p className='blue_point'></p>
          </div>

        

      </div>
      <Hero/>
      <Content/>
    </div>
  )
}

export default Home
