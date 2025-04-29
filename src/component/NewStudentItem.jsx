import './NewStudentItem.css';
import { useState } from "react";

const NewStudentItem = (props) => {
    const [currentName, setCurrentName] = useState("");

    const nameChangeHandler = (event) => {
        setCurrentName(event.target.value);
    }

    const [currentSurname, setCurrentSurname] = useState("");

    const surnameChangeHandler = (event) => {
        setCurrentSurname(event.target.value);
    }

    const [currentAge, setCurrentAge] = useState("");

    const ageChangeHandler = (event) => {
        setCurrentAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submitHandler")
        const newStudent = {
            name: currentName,
            surname: currentSurname,
            age: Number(currentAge),
        }

        props.onAddStudent(newStudent);

        console.log(newStudent);
        setCurrentName("");
        setCurrentSurname("");
        setCurrentAge("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='NewStudentContainer'>
                <div className='StudentInput'>
                    <label>Name</label>
                    <input onChange={nameChangeHandler} value = {currentName}type="text" name="name" placeholder="Enter your name"  />
                </div >
                <div className='StudentInput'>
                    <label>Surname</label>
                    <input onChange ={surnameChangeHandler} value = {currentSurname} type="text" name="surname" placeholder="Enter your surname"  />
                </div>
                <div className='StudentInput'>
                    <label>Age</label>
                    <input onChange={ageChangeHandler} value = {currentAge} type="number" name="age" placeholder="Enter your age" min="0" max="100"  />
                </div>
                <div className='SubmitButton'>
                    <button type="submit">Submit</button>
                </div>
            </div>

        </form>
    )
}
export default NewStudentItem