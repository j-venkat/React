import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import SearchBar from "./SearchBar";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  // Add student
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Search filter
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management System</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <StudentForm addStudent={addStudent} />

      <h4>Total Students: {students.length}</h4>

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;
