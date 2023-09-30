import React from 'react';
import "./UserInfo.css"
import { toast } from 'react-toastify';
const UserInfo = (props) => {
    const breakTimeFunction = props.breakTimeFunction;
    const exerciseTime = props.exerciseTime;
    const breakTime = props.breakTime;

    const toastFunction = () => toast (" Congratulation! Task Completed"); 
     

    return (
        <div className='user'>
            <div className='user-info'>
                <img src="images/ben-weber.jpg" alt="" />
                <div className='user-na'>
                    <h3>Ben Weber</h3>
                    <p>Berlinerstraße, Leipzig<br /> 04105 Germany.</p>
                </div>
            </div>
            <div className='user-wha'>
                <div>
                    <h2>75 kg</h2>
                    <h4>Weight</h4>
                </div>
                <div>
                <h2>6'.7"</h2>
                    <h4>Height</h4>
                </div>
                <div>
                    <h2>25 yrs</h2>
                    <h4>Age</h4>
                </div>
            </div>
            <div className='add-break'> 
                <h2>Add A Break</h2>
                <div className='break-selection'>
                    <span className='break-time' onClick={(event) => breakTimeFunction (event)}>10s</span>
                    <span className='break-time' onClick={(event) => breakTimeFunction (event)}>20s</span>
                    <span className='break-time' onClick={(event) => breakTimeFunction (event)}>30s</span>
                    <span className='break-time' onClick={(event) => breakTimeFunction (event)}>40s</span>
                    <span className='break-time' onClick={(event) => breakTimeFunction (event)}>50s</span>
                </div>
            </div>
            <div className='exercise-details'>
                <h2>
                    Exercise Details
                </h2>
                <div className='exercise'>
                    <h3>Exercise Time:</h3>
                    <p>{exerciseTime} Minute</p>
                </div>
                <div className='break'>
                    <h3>Break Time:</h3>
                    <p>{breakTime? breakTime : '0' } Seconds</p>
                </div>
            </div>
            <div className='complete-btn'>
                <button onClick={() => {toastFunction ()}}>Actively Completed</button>
                
            </div>
        </div>
    );
};

export default UserInfo;