import React from 'react';
import "./SingleActivity.css"

const SingleActivity = (props) => {
    const {description, id, img, name, timeRequired} = props.activity;

    return (
        <div className='single-activity'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='discriptions'>{description.slice(0, 80)}...</p>
            <p className='time'>Time Required: <span className='time-required'>{timeRequired} Minute</span> </p>
            <button className='addToBtn' type='button' >Add to list</button>
        </div>
    );
};

export default SingleActivity;