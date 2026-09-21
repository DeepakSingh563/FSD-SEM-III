import { useState } from "react";

function StudentForm({ onStudentAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !course.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const student = {
      name: name.trim(),
      email: email.trim(),
      course: course.trim(),
    };

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const data = await response.json();
      onStudentAdded(data);

      setName("");
      setEmail("");
      setCourse("");
    } catch (err) {
      console.error(err);
      setError("Failed to connect to backend server. Make sure it's running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Add New Student</h2>
      {error && <div className="error-banner">{error}</div>}
      <form onSubmit={handleSubmit} className="student-form">
        <div className="input-group">
          <label htmlFor="student-name">Student Name</label>
          <input
            id="student-name"
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="student-email">Email Address</label>
          <input
            id="student-email"
            type="email"
            placeholder="e.g. rahul@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="student-course">Course</label>
          <input
            id="student-course"
            type="text"
            placeholder="e.g. CSE / IT / AI"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Adding Student..." : "+ Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
