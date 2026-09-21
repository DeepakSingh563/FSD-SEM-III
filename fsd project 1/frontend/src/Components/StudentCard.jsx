function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <button className="delete-btn" onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;
