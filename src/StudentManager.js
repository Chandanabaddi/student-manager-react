import React, { useState } from "react";

function StudentManager() {

  const [students, setStudents] = useState([
    { id: 1, name: "Anu", course: "CSE" },
    { id: 2, name: "Ravi", course: "ECE" },
    { id: 3, name: "Priya", course: "IT" },
    { id: 4, name: "Rahul", course: "MECH" },
    { id: 5, name: "Sneha", course: "EEE" }
  ]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const addStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ id: "", name: "", course: "" });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Manager</h2>

      <input
        placeholder="ID"
        value={newStudent.id}
        onChange={(e) =>
          setNewStudent({ ...newStudent, id: e.target.value })
        }
      />

      <input
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) =>
          setNewStudent({ ...newStudent, name: e.target.value })
        }
      />

      <input
        placeholder="Course"
        value={newStudent.course}
        onChange={(e) =>
          setNewStudent({ ...newStudent, course: e.target.value })
        }
      />

      <button onClick={addStudent}>Add Student</button>

      <h3>Student List</h3>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <ul>
          {students.map((s) => (
            <li key={s.id}>
              {s.id} - {s.name} - {s.course}
              <button onClick={() => deleteStudent(s.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentManager;