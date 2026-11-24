import React, { useState } from "react";
import { initialStudents } from "../data/students.js";

import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import StatCard from "../components/StatCard.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import StudentTable from "../components/StudentTable.jsx";

const Dashboard = () => {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "All" || student.status === status;

    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
  setStudents((prev) =>
    prev.filter((student) => student.id !== id)
  );
};

  const handleEdit = (student) => {
    console.log("Edit Student: ", student);
  };
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <section className="stats-grid">
          <StatCard title="Total Students" value={students.length} icon="👨‍🎓" />
          <StatCard
            title="Active Students"
            value={students.filter((s) => s.status === "Active").length}
            icon="🟢"
          />
          <StatCard
            title="Completed Students"
            value={students.filter((s) => s.status === "Completed").length}
            icon="🏆"
          />
        </section>
        <SearchFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        <StudentTable
          students={filteredStudents}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default Dashboard;
