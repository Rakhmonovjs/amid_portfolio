import React from 'react'
import netflix from '../../assets/netflix.png'
import forbes from '../../assets/forbes.png'
import itel from '../../assets/itel.png'
import fedex from '../../assets/fedex.png'
import audio from '../../assets/audio.png'
import ellipse from '../../assets/ellipse.png'
import goto from '../../assets/goto.png'
import './Hero.css'

const Hero = () => {
  return (
    <div>
            {/* LOGOSS */}
        <div className='logo_1'> 
            <div className='netflix'>
                <img src={netflix} alt="Netflix" className='netflix_img' />
            
            </div>
            <div className='forbes'>
                <img src={forbes} alt='forbes' className='forbes_img'/>
            </div>
            <div className='itel'>
                <img src={itel} alt='itel' className='itel_img'/>
            </div>
            <div className='fedex'>
                <img src={fedex} alt='fedex' className='fedex_img' />
            </div>
            <div className='audio'>
                <img src={audio} alt='audio' className='audio_img' />
            </div>
            <div className='pengu'>
                <h6 className='pengu_world'>penguines</h6>
                <p className='pengu_desc'>iagems</p>
            </div>
            <div className='ellipse'>
                <img src={ellipse} alt='ellipse' className='ellipse_img' />
            </div>
            <div className='goto'>
                <img src={goto} alt='goto' className='goto_img' />
            </div>
        </div>
        {/* business */}
        <div className='bussiness'>
            <div className='services'>
                <span>
                    services
                </span>
            </div>
            <div>
                <h4 className='exactly'>
                    Exactly Everything You
                        Need For Business
                </h4>
                <p className='exactly_desc'>
                    We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan 
                </p>
            </div>
        </div>


        {/* bussiness iconss */}
        <div className='bussiness1'>
            <div >
                <div className='business_icon1'>
                        <span></span>
                </div>
                <h4 className='business_grow'>
                    Business Growing Support
                </h4>
                <p className='business_grow_desc'>
                    Get every necessary support to grow as
                        business startup
                </p>

                <span className='business_grow_learn'>Learn More ➡️ </span>
            </div>
        </div>

        {/* Business icons 2 */}

        <div className='community'>
            <div className='community_icon'>
                <span></span>
            </div>
            <h4 className='community_attach'>
                Community Attachment
            </h4>
            <p className='community_attach_desc'>
                A lifetime attachment with the community dreamer
            </p>
            <span className='community_learn'>
                <p>Learn More  ➡️ </p>
            </span>
        </div>

        {/* Exceptional Discovery Plans */}

        <div className='excap'>
            <div className='excep_icon'>
                <span> </span>
            </div>
            <div className='excep_discov'>
                Exceptional Discovery Plans
            </div>
            <div className='excep_desc'>
                An exceptional plan can take you ahead millions of step which  we discove
            </div>
            <div className='excep_learn'>
                Learn More  ➡️ 
            </div>
        </div>

    </div>
  )
}

export default Hero
