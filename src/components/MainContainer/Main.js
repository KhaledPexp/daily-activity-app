import React, { useEffect, useState } from 'react';
import UserActivity from '../UserActivity/UserActivity';
import UserInfo from '../UserInfo/UserInfo';
import Header from '../Header/Header';
import "./Main.css"


const Main = () => {

    const [activities, setActivities] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);
    const [breakTime, setBreakTime] = useState (0);
    const name = 'Break-Time';
    

    const breakTimeFunction = (event) => {
        const currentBreakTime  = parseInt(event.target.innerText);
        setBreakTime(currentBreakTime);
        localStorage.setItem(name, currentBreakTime)
    }
    
    useEffect ( ()=> {
        const getBreak = localStorage.getItem('Break-Time')
        setBreakTime(getBreak)
    
    },[breakTime])

    const addToList = timeRequiredTime => {
        
        if(exerciseTime !== 0){
            
            setExerciseTime(exerciseTime + timeRequiredTime);
        }
        else{
            setExerciseTime(timeRequiredTime);
        }
        

        
    }

    useEffect ( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))

    } ,[])

    
    return (
        <div className='main'>
            <div>
                <Header></Header>
                <UserActivity activitiey = {activities} exerciseTime = {addToList}></UserActivity>
            </div>
            <UserInfo exerciseTime = {exerciseTime} breakTimeFunction = {breakTimeFunction} breakTime = {breakTime} ></UserInfo>
            
        </div>
    );
};

export default Main;