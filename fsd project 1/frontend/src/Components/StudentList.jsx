import StudentCard from "./StudentCard";

function StudentList({ students, onDelete }) {
  return (
    <div className="student-list">
      <h2>Students List</h2>

      {students.length === 0 ? (
        <p className="no-data">No students available.</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
