import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  course: "",
  status: "Active",
  attendance: 0,
  progress: 0,
};

function StudentForm({ selectedStudent, onSave, onCancel }) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
    } else {
      setFormData(emptyForm);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...formData,
      attendance: Number(formData.attendance),
      progress: Number(formData.progress),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Student name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name="course"
        placeholder="Course"
        value={formData.course}
        onChange={handleChange}
        required
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        name="attendance"
        type="number"
        min="0"
        max="100"
        placeholder="Attendance"
        value={formData.attendance}
        onChange={handleChange}
      />

      <input
        name="progress"
        type="number"
        min="0"
        max="100"
        placeholder="Progress"
        value={formData.progress}
        onChange={handleChange}
      />

      <button type="submit">
        {selectedStudent ? "Update Student" : "Add Student"}
      </button>

      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default StudentForm;
