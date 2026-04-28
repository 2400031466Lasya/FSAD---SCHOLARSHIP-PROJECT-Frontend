import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./StudentLayout.css";

const StudentLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="student-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">🎓 ScholarTrack</h2>

        <nav className="menu">
          <NavLink
            to="/student/dashboard"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/student/browse"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            Browse
          </NavLink>

          <NavLink
            to="/student/applications"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            My Applications
          </NavLink>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* PAGE CONTENT */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;