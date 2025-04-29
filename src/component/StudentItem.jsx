import "./StudentItem.css";
import { useState } from "react";
function StudentItem(props) {


    const [name, setName] = useState(props.name);
    const nameHandler = () => {
        setName("Changed");
    }

    const surname = props.surname;
    const age = props.age;
    const years = new Date().getFullYear() - props.age;

    let retire = age > 60;
    if (retire) {
        retire = "Retired";
    }
    else {
        retire = "Working";
    }


    let classYears;
    if (age % 4 === 0) {
        classYears = "Red";
    }
    else if (age % 4 === 1) {
        classYears = "Green";
    }
    else if (age % 4 === 2) {
        classYears = "LightBlue";
    }
    else if (age % 4 === 3) {
        classYears = "Blue";
    }



    return (
        <div className="StudentItem">

            <div>{name}</div>
            <div>{surname}</div>
            <div>{age}</div>
            <div className={"Tag " + classYears}>{years}</div>
            <div className={"Tag " + retire}>{retire}</div>
            <button onClick={nameHandler}>Click</button>
        </div>
    )

};

export default StudentItem;