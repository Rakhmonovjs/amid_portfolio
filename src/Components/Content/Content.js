import React from 'react'
import './Content.css'
import stayfitimg from '../../assets/stayfitimg.png'
import centimg from '../../assets/centimg.png'

const Content = () => {
  return (
    <div>

        <div className='achieve'>
            <span className='achieve_in'>
                achievements
            </span>
        </div>
        <div className='we_worked'>
                We    Worked With <span>100+</span> Company Over <span>10</span> Years
        </div>

        <div className='stayfit'>
           
            <div className='stayfit_in'>
                {/* <hr className='orange_line'/> */}
            </div>
            <img src={stayfitimg} alt='stayfitimg' className='stayfitimg'/>

            <div className='stay_job'>
                <h3 className='jobhub'>JobHub Job Finding Website </h3>
                <p className='jobhub_desc'>This website has become one of the best ux interface  for users with an beautiful ui and also lucrative fot upcoming startups in the sectors</p>
                <h6 className='job_view'>
                    <span> View More Work -</span>
                </h6>
            </div>
        
        </div>

        <div>
            <h6 className='w9k'>9k+</h6>
                <p className='completed'>Completed Full Projects</p>
                    <span className='from789'> From 789+ Companies</span>
            
            <h6 className='w924'>924+</h6>
                <p className='statis'>Satisfiingly Happy Clients</p>
                    <span className='from100'>From 100+ Countries</span>
            
            <h6 className='w416'>416</h6>
                <p className='expert'>Expertised  Unit Employees</p>
                    <span className='from20'>From 20+ Countries</span>
            
            <h6 className='w3024'>3024</h6>
                <p className='smartup'>Startups Case Studies</p>
                    <span className='from1000'>From 100+ Countries</span>

        </div>

        <div className='cent'>
            <div className='cent_in'>
                    {/* <hr className='orange_line'/>  */}
            </div>
            <img src={centimg} alt='centimg' className='centimg'/>

            <div>
                <h3 className='cent_pay'>
                     CENT - Payment App Landing Website
                </h3>
                <p className='cent_desc'>
                    This website has become one of the best ux interface 
                    for users with an beautiful ui and also lucrative fot 
                    upcoming startups in the sectors
                </p>
            </div>

        </div>
            
    </div>
  )
}

export default Content
