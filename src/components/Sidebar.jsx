import {
  FiHome,
  FiUsers,
  FiBookOpen,
  FiSettings,
} from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>StudentHub</h2>

      <nav>
        <p><FiHome /> Dashboard</p>
        <p><FiUsers /> Students</p>
        <p><FiBookOpen /> Courses</p>
        <p><FiSettings /> Settings</p>
      </nav>
    </aside>
  );
}

export default Sidebar;