import { useEffect, useState } from "react";
import "./Scholarships.css";

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {

    const scholarshipData = [
      { id: 1, title: "PM YASASVI Scholarship", amount: 75000 },
      { id: 2, title: "INSPIRE Program", amount: 80000 },
      { id: 3, title: "NTSE Scholarship", amount: 60000 }
    ];

    setScholarships(scholarshipData);

  }, []);

  return (
    <div className="scholarships-page">

      <h1>Browse Scholarships</h1>

      <div className="grid">
        {scholarships.map((s) => (
          <div key={s.id} className="card">
            <h3>{s.title}</h3>
            <p>₹{s.amount}</p>
            <button>Apply</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Scholarships;