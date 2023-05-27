import React from 'react'
import '../App.css';
const Header = () => {
  return (
    <header>
        <div className=''>
            <div className='big_green'></div>
            <div className='orange'></div>
            <div className='green'></div>
            <h1 className='amid'>amid.</h1>
            <h6 className='about_amid'>
                About <span>amid</span>
            </h6>
            <h6 className='features'>Features</h6>
            <h6 className='portfolio'>Portfolio</h6>
            <h6 className='reviews'>Reviews</h6>
            <button className='login'>Login</button>
        </div>

    
    </header>
  )
}

export default Header
