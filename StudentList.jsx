import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent }) {
  if (students.length === 0) {
    return <p>No students found</p>;
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;
