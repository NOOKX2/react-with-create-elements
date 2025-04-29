import React from "react";

function StudentExample(props) {
    console.log("StudentExample", props.children);
    return (
        <div>
            StudentExample={" "}
            {React.Children.map(props.children, (child) =>
              React.cloneElement(child, { style: { color: "green" ,fontSize: "30px"} }))}
        </div>
    );
}
export default StudentExample