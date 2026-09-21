import { useEffect, useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const response = await fetch("http://localhost:5000/api/students");

    const data = await response.json();

    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleStudentAdded = (student) => {
    setStudents([...students, student]);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/students/${id}`, {
      method: "DELETE",
    });

    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <StudentForm onStudentAdded={handleStudentAdded} />

      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default App;
