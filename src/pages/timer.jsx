import React, { useState, useEffect } from 'react';
import { EVENT_MESSAGE, EVENT_TIME, BRIDE_NAME, GROOM_NAME } from '../constants/index';

const Timer = _ => {
    const [TimedValue, timeHandler] = useState({days: '',hours: '',minutes: '',seconds: '',timerEnabled: false});
    const calculateDate = _ => {
        let endTime = new Date(EVENT_TIME);			
		endTime = (Date.parse(endTime) / 1000);
		let now = new Date();
		now = (Date.parse(now) / 1000);
        let timeLeft = endTime - now;
        if(timeLeft < 0){
            return {
                days: '',
                hours: '',
                minutes: '',
                seconds: '',
                timerEnabled: false
            }
        }
        else{
            let days = Math.floor(timeLeft / 86400); 
		    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            return {
                days ,
                hours,
                minutes,
                seconds,
                timerEnabled: true
            }
        }
        
    }
    useEffect(()=>{
        setInterval(()=> { 
            timeHandler(calculateDate()); 
        }, 1000);
    })

    const TimeComponent = props => {
        const { days, hours, minutes, seconds } = props;
        return (
            <div id="timer" className="d-flex">
                <div className="time" id="days">{days}<span>Days</span></div>
                <div className="time pl-3" id="hours">{hours}<span>Hours</span></div>
                <div className="time pl-3" id="minutes">{minutes}<span>Minutes</span></div>
                <div className="time pl-3" id="seconds">{seconds}<span>Seconds</span></div>
            </div>
        )
    }

    return (
        <div className="text text-center">
            <div className="icon">
                <span className="flaticon-rose-outline-variant-with-vines-and-leaves"></span>
            </div>
            <span className="subheading">The Wedding of</span>
            <h1>{GROOM_NAME + " & "+ BRIDE_NAME}</h1>
            {
                TimedValue.timerEnabled ? 
                <TimeComponent days={TimedValue.days} hours={TimedValue.hours} minutes={TimedValue.minutes} seconds={TimedValue.seconds} />:
                <div id="timer" className="d-flex"><div className='time eventMessage'><span>{EVENT_MESSAGE}</span></div></div>
            }
        </div>
    )
}
export default Timer;