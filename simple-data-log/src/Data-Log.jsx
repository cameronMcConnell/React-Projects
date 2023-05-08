import './Data-Log.css'
import {useState} from 'react';

export default function Data_Log() {
    
    // render first names
    const [data, setData] = useState([]);

    // save request last name
    const [reqL, setReqL] = useState('');

    // save submit first and last names
    const [subF, setSubF] = useState('');
    const [subL, setSubL] = useState('');

    // handle requests to render list of first names paired to reqL
    function handleReq(event) {
        event.preventDefault();
        let obj = {};
        obj[reqL] = '';
        setReqL('');
        fetch('http://localhost:5000/request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(send => setData(send))
        .catch(error => console.error(error));
    }

    // handle submission of subL and subF pair
    function handleSub(event) {
        event.preventDefault();
        let obj = {};
        obj[subL] = subF;
        setSubL('');
        setSubF('');
        fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
        .then(res => res.text())
        .then(sub => console.log(sub))
        .catch(err => console.error(err));
    }

    return (
        <div id="item-container">
            <div className="inner-container">
                <h1>Submit Data to Server</h1>
                <hr></hr>
                <form className="form-container" onSubmit={(event) => handleSub(event)}>
                    <label>First Name:</label>
                    <input type="text" value={subF} onChange={(event) => setSubF(event.target.value)}></input>
                    <label>Last Name:</label>
                    <input type="text" value={subL} onChange={(event) => setSubL(event.target.value)}></input>
                    <input type="submit"></input>
                </form>
            </div>
            <div className="inner-container">
                <h1>Request Data from Server</h1>
                <hr></hr>
                <form className="form-container" onSubmit={(event) => handleReq(event)}>
                    <label>Last Name:</label>
                    <input type="text" value={reqL} onChange={(event) => setReqL(event.target.value)}></input>
                    <input type="submit"></input>
                </form>
                <h2>First Names:</h2>
                <span id="hr-span">
                    <hr style={{width: "35%"}}></hr>
                </span>
                <ul>
                    {data.map((d, ind) => (
                        <li key={ind}>{d}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}