import React from "react";

const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <span className={`status-badge status-${student.status.toLowerCase()}`}>
                  {student.status}
                </span>
              </td>
              <td>{student.progress}%</td>
              <td>
                <button onClick={() => onEdit(student)}>Edit</button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {students.length === 0 && <p>No students found.</p>}
    </div>
  );
};

export default StudentTable;
