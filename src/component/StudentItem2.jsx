import "./StudentItem.css";
import React from "react";


class StudentItem extends React.Component {
    render() {
        const isFlag = true;
        const message1 = "Hello World!";
        const message2 = "Bye World!";

        return (
            <div className="StudentItem">
                <div>{isFlag ? message1 : message2}</div>
                <div>{message1}</div>
                <div>{message2}</div>
                <div>Class</div>
            </div>
        )
    }
}

export default StudentItem;