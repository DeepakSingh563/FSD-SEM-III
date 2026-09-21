function StudentCard({ student, onDelete }) {
  return (
    <div>
      <h3>{student.name}</h3>

      <p>Email: {student.email}</p>

      <p>Course: {student.course}</p>

      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}

export default StudentCard;
