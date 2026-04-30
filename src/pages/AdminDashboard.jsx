import "./Admin.css";
import { useState, useEffect } from "react";

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

  // ✅ LOAD DATA
  useEffect(() => {

    const scholarshipData = [
      { id: 1, title: "PM YASASVI Scholarship", provider: "Government", amount: 75000 },
      { id: 2, title: "INSPIRE Program", provider: "DST", amount: 80000 },
      { id: 3, title: "NTSE Scholarship", provider: "Government", amount: 60000 },
      { id: 4, title: "PMSSS Scholarship", provider: "Government", amount: 100000 },
      { id: 5, title: "AICTE Pragati Scholarship", provider: "AICTE", amount: 50000 },
      { id: 6, title: "AICTE Swanath Scholarship", provider: "AICTE", amount: 50000 },
      { id: 7, title: "Begum Hazrat Mahal Scholarship", provider: "Government", amount: 40000 },
      { id: 8, title: "CBSE Merit Scholarship", provider: "CBSE", amount: 30000 },
      { id: 9, title: "HDFC Parivartan ECSS", provider: "HDFC", amount: 75000 },
      { id: 10, title: "Infosys STEM Stars", provider: "Infosys", amount: 100000 },
      { id: 11, title: "Kotak Kanya Scholarship", provider: "Kotak", amount: 150000 },
      { id: 12, title: "Aditya Birla Scholarship", provider: "Aditya Birla", amount: 125000 },
      { id: 13, title: "JN Tata Endowment", provider: "Tata", amount: 200000 },
      { id: 14, title: "Amazon Future Engineer", provider: "Amazon", amount: 100000 },
      { id: 15, title: "L'Oreal Women in Science", provider: "L'Oreal", amount: 90000 }
    ];

    const applicationData = [
      { id: 1, studentName: "deepthi", scholarshipName: "PM YASASVI Scholarship", status: "PENDING" },
      { id: 2, studentName: "lasya", scholarshipName: "INSPIRE Program", status: "PENDING" },
      { id: 3, studentName: "sejal", scholarshipName: "NTSE Scholarship", status: "PENDING" },
      { id: 4, studentName: "varshita", scholarshipName: "PMSSS Scholarship", status: "PENDING" },
      { id: 5, studentName: "fyzaan", scholarshipName: "AICTE Pragati Scholarship", status: "PENDING" },

      { id: 6, studentName: "chaitra", scholarshipName: "AICTE Swanath Scholarship", status: "APPROVED" },
      { id: 7, studentName: "pooja", scholarshipName: "Begum Hazrat Mahal Scholarship", status: "APPROVED" },
      { id: 8, studentName: "bhavya", scholarshipName: "CBSE Merit Scholarship", status: "APPROVED" },
      { id: 9, studentName: "bhanu", scholarshipName: "HDFC Parivartan ECSS", status: "APPROVED" },
      { id: 10, studentName: "varshu", scholarshipName: "Infosys STEM Stars", status: "APPROVED" }
    ];

    setScholarships(scholarshipData);
    setApplications(applicationData);

  }, []);

  // ✅ STATS
  const pendingApplications = applications.filter(
    (app) => app.status === "PENDING"
  );

  const totalFunds = scholarships.reduce(
    (sum, s) => sum + Number(s.amount || 0),
    0
  );

  // ✅ ADD / UPDATE
  const handleSubmit = () => {

    if (editId) {
      const updated = scholarships.map((s) =>
        s.id === editId ? { ...s, ...formData } : s
      );
      setScholarships(updated);
      alert("Updated Successfully ✅");
    } else {
      const newData = {
        id: scholarships.length + 1,
        ...formData
      };
      setScholarships([...scholarships, newData]);
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
  };

  // ✅ DELETE
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setScholarships(scholarships.filter((s) => s.id !== id));
    }
  };

  // ✅ APPROVE
  const handleApprove = (id) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: "APPROVED" } : app
    );
    setApplications(updated);
  };

  // ✅ REJECT
  const handleReject = (id) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: "REJECTED" } : app
    );
    setApplications(updated);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p className="subtitle">
        Manage scholarships and review applications
      </p>

      {/* STATS */}
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
          <p>Pending Review</p>
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