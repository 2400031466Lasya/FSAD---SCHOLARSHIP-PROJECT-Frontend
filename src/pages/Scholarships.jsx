import { useEffect, useState } from "react";
import API from "../api/axios";
import "./Scholarships.css";

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchScholarships();
    fetchApplications();
  }, []);

  // ✅ GET ALL SCHOLARSHIPS FROM BACKEND
  const fetchScholarships = async () => {
  const res = await axios.get("http://localhost:8080/api/scholarships");
  setScholarships(res.data);
};

  // ✅ GET USER APPLICATIONS
  const fetchApplications = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await API.get(`/applications/user/${user.id}`);
      setApplications(res.data);
    } catch (err) {
      console.error("Error fetching applications", err);
    }
  };

  // ✅ APPLY FUNCTION
  const handleApply = async (scholarshipId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await API.post("/applications/apply", {
        userId: user.id,
        scholarshipId: scholarshipId,
      });

      alert("Applied Successfully ✅");

      fetchApplications(); // refresh

    } catch (err) {
      console.error(err);
      alert("Application Failed ❌");
    }
  };

  return (
    <div className="scholarships-page">
      <h1>Browse Scholarships</h1>
      <p className="subtitle">
        Find and apply for financial aid opportunities
      </p>

      <input
        type="text"
        placeholder="Search by title or category..."
        className="search"
      />

      <div className="grid">
        {scholarships.map((s) => {
          // ✅ check if already applied
          const alreadyApplied = applications.some(
            (a) => a.scholarshipId === s.id
          );

          return (
            <div key={s.id} className="card">
              <h3>{s.title}</h3>
              <p className="desc">{s.description}</p>

              <div className="meta">
                <span>{s.amount}</span>
                <span>{s.deadline}</span>
                <span>{s.category}</span>
              </div>

              <p className="eligibility">
                <strong>Eligibility:</strong> {s.eligibility}
              </p>

              <button
                onClick={() => handleApply(s.id)}
                disabled={alreadyApplied}
              >
                {alreadyApplied ? "Applied ✅" : "Apply Now"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scholarships;