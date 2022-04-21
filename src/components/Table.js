import React,{useState} from 'react'
import { randomIntFromInterval } from '../common/utility';
import Cart from './Cart';

const Table = () => {

    let availableSeats ;

    var date = new Date();

    var time = new Date();

    const [cartValue, setCartValue] = useState(0);

    const incrementCartValue = () => {
        setCartValue(cartValue + 1);
    }

  return (
    <div>
        <Cart cartValue={cartValue} />
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Availability</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {Array.apply(0, Array(randomIntFromInterval(15,20))).map((item, index)=>{
                availableSeats = randomIntFromInterval(0,3);
                date.setDate(date.getDate() + randomIntFromInterval(1,7));
                time.setHours(time.getHours() + randomIntFromInterval(1,5));
            return(<tr key={index}>
                <td>{date.toLocaleDateString()}</td>
                <td>{time.toLocaleTimeString()}</td>
                <td>{availableSeats}</td>
                <td><button onClick={incrementCartValue}>{(availableSeats===0)?'Full':'Book Now'}</button></td>
            </tr>);})
            }
            </tbody>
        </table>
    </div>
  )
}

export default Table