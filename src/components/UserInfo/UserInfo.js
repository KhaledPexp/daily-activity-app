import React from 'react';
import "./UserInfo.css"
const UserInfo = () => {
    return (
        <div className='user'>
            <div className='user-info'>
                <img src="images/ben-weber.jpg" alt="" />
                <div className='user-na'>
                    <h3>Ben Weber</h3>
                    <p>Berlin,<br />Germany</p>
                </div>
            </div>
            <div className='user-wha'>
                <div>
                    <h2>75kg</h2>
                    <h4>Weight</h4>
                </div>
                <div>
                <h2>6.7</h2>
                    <h4>Height</h4>
                </div>
                <div>
                    <h2>25yrs</h2>
                    <h4>Age</h4>
                </div>
            </div>
            <div className='add-break'> 
                <h2>Add A Break</h2>
                <div className='break-selection'>
                    <span className='break-time'>10s</span>
                    <span className='break-time'>20s</span>
                    <span className='break-time'>30s</span>
                    <span className='break-time'>40s</span>
                    <span className='break-time'>50s</span>
                </div>
            </div>
            <div className='exercise-details'>
                <h2>
                    Exercise Details
                </h2>
                <div className='exercise'>
                    <h3>Exercise Time:</h3>
                    <p>0 Minute</p>
                </div>
                <div className='break'>
                    <h3>Break Time:</h3>
                    <p>0 Seconds</p>
                </div>
            </div>
            <div className='complete-btn'>
                <button>Actively Completed</button>
            </div>
        </div>
    );
};

export default UserInfo;