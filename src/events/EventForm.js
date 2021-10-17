import React, {useState} from "react";
import UsersModal from './UsersModal';
import firestoreAdd from "../hooks/useFirestoreAdd";

const EventForm = () => {

    const [errors, setErrors ] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    const [selectedParticipants, setSelectedParticipants] = useState([]);
    console.log(selectedParticipants);

    const validate = (eventData) => {
        const {eventName, startDate, endDate} = eventData;

        let errors = [];

        if(!eventName) {
            errors.push("Event Name field cannot be empty !");
        }

        if(!startDate) {
            errors.push("Start Date field cannot be empty !");
        }
        if(!endDate) {
            errors.push("End Date field cannot be empty !");
        }

        if(endDate < startDate) {
            errors.push("End Date field cannot be before Start Date !");
        }

        if(errors.length > 0) {
            setErrors(errors);
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let eventData = {
            eventName: e.target[0].value,
            startDate: e.target[1].value,
            endDate: e.target[2].value,
            participants: selectedParticipants
        }
       
        if(validate(eventData)) {
            setErrors([]);
            setShowUsers(false);
            firestoreAdd('events', eventData);
        }
    }

    const handleClick = () => {
        setShowUsers(true);
    }

    return (
        <form onSubmit={handleSubmit} className="event-form">
            {errors && errors.map((error) => <div className="error">{error}</div>)}
            <label>Event Name: </label>
            <input type="text" className="" />
            <label>Start Time: </label>
            <input type="date" />
            <label>End Time: </label>
            <input type="date" />
            <button type="button" onClick={handleClick}>Select Participants</button>
            {showUsers && <UsersModal 
                            setUsers={setSelectedParticipants}
                            setShowUsers={setShowUsers}
                        />}
            <label>Notify Participants: </label>
            <select>
                <option>yes</option>
                <option>no</option>
            </select>
            <input type="submit" value="Create Event" />
        </form>
    )
}

export default EventForm;