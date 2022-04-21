import React from 'react'
import { randomIntFromInterval } from '../common/utility';

const FreeSeats = () => {

    const seats = randomIntFromInterval(5, 15)

    return (
    <div>Free Seats Left: {seats}</div>
    );
}

export default FreeSeats