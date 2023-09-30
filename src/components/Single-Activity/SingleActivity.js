import React, { useState } from 'react';
import "./SingleActivity.css"

const SingleActivity = (props) => {
    const {description, img, name, timeRequired} = props.activity;
    const exerciseTimeFunction = props.exerciseTime;

    const [toggle, setToggle] = useState(true);

        const toggleFunction = () =>{

            if(toggle === true){
                setToggle(!toggle)
            }
            
        }

    return (
        <div className='single-activity' >
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='discriptions'>{description.slice(0, 80)}...</p>
            <p className='time'>Time Required: <span className='time-required'>{timeRequired} Minute</span> </p>
            <button className= {(toggle? 'addToBtn' : 'addToBtnColor' )} disabled = {!toggle} onClick={() => { 
                                                            exerciseTimeFunction (timeRequired); 
                                                            toggleFunction()
                                                        }
                                                } type='button'>{toggle? 'Add to list': 'Added'}</button>
        </div>
    );
  
};

export default SingleActivity;