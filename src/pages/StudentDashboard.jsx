import { useEffect, useState } from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {

  const [applications, setApplications] = useState([]);
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {

    // ✅ SAME SCHOLARSHIPS (from admin)
    const scholarshipData = [
      { id: 1, title: "PM YASASVI Scholarship", amount: 75000, deadline: "2026-06-30" },
      { id: 2, title: "INSPIRE Program", amount: 80000, deadline: "2026-07-10" },
      { id: 3, title: "NTSE Scholarship", amount: 60000, deadline: "2026-07-20" },
      { id: 4, title: "PMSSS Scholarship", amount: 100000, deadline: "2026-08-01" },
      { id: 5, title: "AICTE Pragati Scholarship", amount: 50000, deadline: "2026-08-15" }
    ];

    // ✅ SAME APPLICATIONS (student-specific)
    const applicationData = [
      { id: 1, scholarshipName: "PM YASASVI Scholarship", status: "PENDING", deadline: "2026-06-30", amount: "₹75,000" },
      { id: 2, scholarshipName: "INSPIRE Program", status: "APPROVED", deadline: "2026-07-10", amount: "₹80,000" },
      { id: 3, scholarshipName: "NTSE Scholarship", status: "PENDING", deadline: "2026-07-20", amount: "₹60,000" }
    ];

    setScholarships(scholarshipData);
    setApplications(applicationData);

  }, []);

  // ✅ COUNTS
  const totalApplications = applications.length;
  const pending = applications.filter(a => a.status === "PENDING").length;
  const approved = applications.filter(a => a.status === "APPROVED").length;

  return (
    <div className="dashboard">

      {/* HEADER */}
      <h1>Welcome, Students who searching for Perfect scholarships 😇</h1>
      <p className="subtitle">Your scholarship overview at a glance</p>

      {/* STATS */}
      <div className="stats">

        <div className="stat-card">
          <h3>Available Scholarships</h3>
          <span>{scholarships.length}</span>
        </div>

        <div className="stat-card">
          <h3>My Applications</h3>
          <span>{totalApplications}</span>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <span>{pending}</span>
        </div>

        <div className="stat-card">
          <h3>Approved</h3>
          <span>{approved}</span>
        </div>

      </div>

      {/* UPCOMING DEADLINES */}
      <div className="deadlines-card">
        <div className="deadlines-header">
          <h2>Upcoming Deadlines</h2>
          <button className="view-all">View All</button>
        </div>

        {applications.length === 0 ? (
          <p>No deadlines available</p>
        ) : (
          applications.map((app) => (
            <div key={app.id} className="deadline-item">
              <div>
                <h4>{app.scholarshipName}</h4>
                <p>{app.amount} · Student</p>
              </div>
              <span className="date">{app.deadline}</span>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default StudentDashboard;