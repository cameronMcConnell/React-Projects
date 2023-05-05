import './Data-Log.css'

export default function Data_Log() {
    return (
        <div id="item-container">
            <div className="inner-container">
                <h1>Submit Data to Server</h1>
                <form className="form-container">
                    <label for="fname">First Name:</label>
                    <input type="text" name="fname"></input>
                    <label for="lname">Last Name:</label>
                    <input type="text" name="lname"></input>
                    <label for="dte">Birthday:</label>
                    <input type="date" name="dte"></input>
                    <input type="submit"></input>
                </form>
            </div>
            <div className="inner-container">
                <h1>Request Data from Server</h1>
            </div>
        </div>
    )
}