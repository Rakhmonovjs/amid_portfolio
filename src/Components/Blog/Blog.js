import React from 'react'
import './Blog.css'
import upgimg from '../../assets/upgimg.png'
import teamimg from '../../assets/teamimg.png'



const Blog = () => {
  return (
    <div>
        <div className='blog'>
            <h5 className='blog_in'>
                    blog
            </h5>
        </div>
        <h1 className='we_publish'>
            We Publish Blogs Every Week
        </h1>
        <p className='publish_desc'>
            We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan 
        </p>

        {/* upg */}

        <div className='blog-fot'>
            <div className='upgrow'>
                <img src={upgimg} alt='upgimg' className='upgimg' />
                    <div className='data'>
                        <span>22 Dec</span>
                    </div>

                <h2 className='upg_h2'>
                    Upgrowing Economy Needs More  Startups
                </h2>
                <p className='upg_desc'>
                    We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan 
                </p>
                <p className='learn'>
                    <span>Learn More -</span>
                </p>
            </div>
        </div>

        {/* Team */}

        <div className='team-fot'>
            <div className='team'>
                <img src={teamimg} alt='teamimg' className='teamimg' />
                    <div className='team_data'>
                        <span>22 Dec</span>
                    </div>

                <h2 className='team_h2'>
                    Upgrowing Economy Needs More  Startups
                </h2>
                <p className='team_desc'>
                    We understand how desperatly you want to grow in the business world & our motto is to help you with practicale idea and plan 
                </p>
                <p className='team_learn'>
                    <span>Learn More -</span>
                </p>
            </div>
        </div>

    </div>
  )
}

export default Blog
