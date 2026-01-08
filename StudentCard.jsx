import React from "react";

function StudentCard({ student, deleteStudent }) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
    </div>
  );
}

export default StudentCard;
