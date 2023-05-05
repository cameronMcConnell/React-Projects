import './Data-Log.css'
import {useState} from 'react';

export default function Data_Log() {
    //const [data, setData] = useState([]);
    const [reqL, setReqL] = useState('');

    function handleReq(event) {
        event.preventDefault();
        const send = reqL;
        fetch('http://localhost:5000/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(send)
        })
        .then(res => res.json)
        .then(send => console.log(send))
        .catch(error => console.error(error));
    }

    function handleChange(event) {
        setReqL(event.target.value);
    }

    return (
        <div id="item-container">
            <div className="inner-container">
                <h1>Submit Data to Server</h1>
                <hr></hr>
                <form className="form-container" action="http://localhost:5000/" method="POST">
                    <label for="fname">First Name:</label>
                    <input type="text" name="fname"></input>
                    <label for="lname">Last Name:</label>
                    <input type="text" name="lname"></input>
                    <input type="submit"></input>
                </form>
            </div>
            <div className="inner-container">
                <h1>Request Data from Server</h1>
                <hr></hr>
                <form className="form-container" onSubmit={() => handleReq}>
                    <label for="lname">Last Name:</label>
                    <input type="text" name="lname" value={reqL} onChange={() => handleChange}></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}