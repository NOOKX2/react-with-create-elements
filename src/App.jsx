import React from "react"
import './App.css';
import StudentItem from "./component/StudentItem";
import StudentItem2 from "./component/StudentItem2";
import StudentExample from "./component/StudentExample";
import NewStudentItem from "./component/NewStudentItem";
import { useState } from "react";
function App() {
  const student1 = { name: "John", surname: "Doe", age: 20 };
  const student2 = { name: "Jane", surname: "Smith", age: 22 };
  const student3 = { name: "Joe", surname: "Smite", age: 65 };

  const studentList = [student1, student2];
  const [status, setStatus] = useState("Available");

  const clickHandler = () => {
    setStatus("Busy");
  }

  const addStudentHandler = (newStudent) => {
    const newStudentItem = {
      ...newStudent,
      id: Math.random().toString(),
    };
  }

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <NewStudentItem onAddStudent={addStudentHandler}/>
      <StudentItem name={student1.name} surname={student1.surname} age={student1.age}/>
      <StudentItem name={student2.name} surname={student2.surname} age={student2.age}/>
      <StudentItem name={student3.name} surname={student3.surname} age={student3.age}/>
      <h3>Status: {status}</h3>
      <button onClick = {clickHandler}>Click Me</button>
      {/* <StudentExample>
        <div>Test = 1</div>
      </StudentExample> */}
    
    </div>
  )
}

export default App;
