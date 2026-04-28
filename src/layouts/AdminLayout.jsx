import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // frontend-only logout
    navigate("/", { replace: true });
  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="logo">🎓 ScholarTrack</h2>

        <nav className="admin-menu">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive ? "admin-link active" : "admin-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/scholarships"
            className={({ isActive }) =>
              isActive ? "admin-link active" : "admin-link"
            }
          >
            Scholarships
          </NavLink>

          <NavLink
            to="/admin/applications"
            className={({ isActive }) =>
              isActive ? "admin-link active" : "admin-link"
            }
          >
            Applications
          </NavLink>
        </nav>

        <div className="admin-footer">
          <div className="admin-user">
            <div className="avatar"></div>
            <div>
              <p className="admin-name"></p>
              <span className="admin-role">Admin</span>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;