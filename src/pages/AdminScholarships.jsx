import "./Admin.css";

const AdminScholarships = () => {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1>Manage Scholarships</h1>
          <p className="subtitle">
            Create, edit, and remove scholarship listings
          </p>
        </div>
        <button className="primary-btn">+ Add Scholarship</button>
      </div>

      {[
        {
          title: "Merit Excellence Award",
          amount: "$5,000",
          date: "2026-04-15",
          type: "Merit-Based",
          org: "National Education Fund",
        },
        {
          title: "STEM Innovation Scholarship",
          amount: "$8,000",
          date: "2026-05-01",
          type: "STEM",
          org: "Tech Future Foundation",
        },
        {
          title: "Community Service Grant",
          amount: "$3,000",
          date: "2026-03-30",
          type: "Service",
          org: "Community First Organization",
        },
      ].map((s, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <h2>{s.title}</h2>
            <span className="badge">Active</span>
          </div>
          <p className="muted">
            {s.amount} • {s.date} • {s.type} • {s.org}
          </p>
          <div className="actions">
            <button>Edit</button>
            <button className="danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminScholarships;