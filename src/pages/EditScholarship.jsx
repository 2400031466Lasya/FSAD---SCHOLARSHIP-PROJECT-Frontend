import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

const ManageScholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("scholarships")) || [];
    setScholarships(stored);
  }, []);

  return (
    <AdminLayout>
      <div className="page-header">
        <div>
          <h1>Manage Scholarships</h1>
          <p>Create, edit, and remove scholarship listings</p>
        </div>
        <button className="primary-btn">+ Add Scholarship</button>
      </div>

      {scholarships.length === 0 ? (
        <div className="empty-card">No scholarships available.</div>
      ) : (
        scholarships.map((s) => (
          <div key={s.id} className="card">
            <div className="card-header">
              <h3>{s.title}</h3>
              <span className="status">Active</span>
            </div>

            <div className="card-meta">
              <span>💰 ${s.amount}</span>
            </div>
          </div>
        ))
      )}
    </AdminLayout>
  );
};

export default ManageScholarships;