import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <img src="logo.png" alt="" />
            <div>
                <h1>Daily-Fitness-Club</h1>
                <p>Select Your Daily Exercise</p>
            </div>
        </div>
    );
};

export default Header;