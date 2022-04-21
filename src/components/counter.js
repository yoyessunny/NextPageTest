import React, {useState, useEffect} from 'react'
import { randomIntFromInterval } from '../common/utility';

const Counter = () => {

    const [seconds, setSeconds ] =  useState(randomIntFromInterval(30, 60));
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
    <div>Time Left : {seconds} seconds</div>
    );
}

export default Counter