import "./Admin.css";

const AdminApplications = () => {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Applications</h1>
          <p className="subtitle">
            Review and manage student applications
          </p>
        </div>
        <select className="filter">
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
        </select>
      </div>

      <div className="card center">
        <p className="muted">No applications found.</p>
      </div>
    </div>
  );
};


export default AdminApplications;