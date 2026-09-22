const students = require("../data/students");

const getStudents = (req, res) => {
  res.json(students);
};

const getStudent = (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.json(student);
};

const createStudent = (req, res) => {
  const { name, email, course } = req.body;

  const newStudent = {
    id: Date.now(),
    name,
    email,
    course,
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
};

const updateStudent = (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  student.name = req.body.name;
  student.email = req.body.email;
  student.course = req.body.course;

  res.json(student);
};

const deleteStudent = (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex((student) => student.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  const deletedStudent = students.splice(index, 1);

  res.json({
    message: "Student deleted",
    student: deletedStudent[0],
  });
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
