import React, { useEffect, useState } from 'react';
import UserActivity from '../UserActivity/UserActivity';
import UserInfo from '../UserInfo/UserInfo';
import Header from '../Header/Header';
import "./Main.css"

const Main = () => {

    const [activities, setActivities] = useState([]);

    useEffect ( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))

    } ,[])

    return (
        <div className='main'>
            <div>
                <Header></Header>
                <UserActivity activitiey = {activities}></UserActivity>
            </div>
            <UserInfo></UserInfo>
        </div>
    );
};

export default Main;