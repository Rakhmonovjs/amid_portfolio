import React from 'react'
import './Content.css'


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

    </div>
  )
}

export default Content
