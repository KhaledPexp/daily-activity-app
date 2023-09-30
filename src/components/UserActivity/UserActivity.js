import React, { useEffect, useState } from 'react';
import SingleActivity from '../Single-Activity/SingleActivity';
import "./UserActivity.css"

const UserActivity = (props) => {
    const activities = props.activitiey;

    return (
        <div className='all-activities'>
          
                {activities.map (activity => <SingleActivity activity ={activity} exerciseTime = {props.exerciseTime} key={activity.id} ></SingleActivity>)}
            
        </div>
    );
};



export default UserActivity;