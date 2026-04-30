import "./Admin.css";
import { useState, useEffect } from "react";
import API from "../api/axios";

const AdminDashboard = () => {

  const [scholarships, setScholarships] = useState([]);
  const [applications, setApplications] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    provider: "",
    amount: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const schRes = await API.get("/scholarships");
      const appRes = await API.get("/applications/all");

      setScholarships(schRes.data);
      setApplications(appRes.data);

    } catch (err) {
      console.error(err);
    }
  };

  const pendingApplications = applications.filter(
    (app) => app.status === "PENDING"
  );

  const totalFunds = scholarships.reduce(
    (sum, s) => sum + Number(s.amount || 0),
    0
  );

  // ADD / UPDATE
  const handleSubmit = async () => {
    try {
      if (editId) {
        await API.put(`/scholarships/${editId}`, formData);
        alert("Updated Successfully ✅");
      } else {
        await API.post("/scholarships", formData);
        alert("Added Successfully ✅");
      }

      setFormData({
        title: "",
        description: "",
        provider: "",
        amount: ""
      });

      setShowForm(false);
      setEditId(null);

      fetchData();

    } catch (err) {
      console.error(err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await API.delete(`/scholarships/${id}`);
      fetchData();
    }
  };

  // APPROVE
  const handleApprove = async (id) => {
    await API.put(`/applications/approve/${id}`);
    fetchData();
  };

  // REJECT
  const handleReject = async (id) => {
    await API.put(`/applications/reject/${id}`);
    fetchData();
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p className="subtitle">Manage scholarships & applications</p>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Scholarships</p>
          <h2>{scholarships.length}</h2>
        </div>

        <div className="stat-card">
          <p>Applications</p>
          <h2>{applications.length}</h2>
        </div>

        <div className="stat-card">
          <p>Pending</p>
          <h2>{pendingApplications.length}</h2>
        </div>

        <div className="stat-card">
          <p>Total Funds</p>
          <h2>₹{totalFunds.toLocaleString()}</h2>
        </div>
      </div>

      {/* SCHOLARSHIPS */}
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Scholarships</h2>
          <button onClick={() => setShowForm(true)}>+ Add</button>
        </div>

        {showForm && (
          <div style={{ marginTop: "10px" }}>
            <input placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })} />

            <input placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })} />

            <input placeholder="Provider"
              value={formData.provider}
              onChange={(e) => setFormData({ ...formData, provider: e.target.value })} />

            <input type="number" placeholder="Amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />

            <button onClick={handleSubmit}>
              {editId ? "Update" : "Add"}
            </button>
          </div>
        )}

        <ul style={{ marginTop: "15px" }}>
          {scholarships.map((s) => (
            <li key={s.id}>
              <b>{s.title}</b> ({s.provider}) — ₹{s.amount}

              <button onClick={() => {
                setShowForm(true);
                setEditId(s.id);
                setFormData(s);
              }}>
                Edit
              </button>

              <button style={{ color: "red" }}
                onClick={() => handleDelete(s.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* APPLICATIONS */}
      <div className="card">
        <h2>Applications</h2>

        <ul>
          {applications.map((app) => (
            <li key={app.id}>
              <b>{app.studentName}</b> — {app.scholarshipName} — {app.status}

              <button style={{ color: "green" }}
                onClick={() => handleApprove(app.id)}>
                Approve
              </button>

              <button style={{ color: "red" }}
                onClick={() => handleReject(app.id)}>
                Reject
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;