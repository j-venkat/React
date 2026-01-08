import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !age || !course.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      age: Number(age),
      course: course.trim(),
    };

    addStudent(newStudent);

    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div>
      <h3>Add Student</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Add Student</button>
    </div>
  );
}

export default StudentForm;
