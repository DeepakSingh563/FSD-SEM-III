import { useEffect, useState } from "react";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleStudentAdded = (student) => {
    setStudents([...students, student]);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <StudentForm onStudentAdded={handleStudentAdded} />
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default App;
