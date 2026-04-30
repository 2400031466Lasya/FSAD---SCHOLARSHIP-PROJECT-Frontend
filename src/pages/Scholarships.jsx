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

  // ✅ GET ALL SCHOLARSHIPS
  const fetchScholarships = async () => {
    try {
      const res = await API.get("/scholarships"); // ✅ FIXED
      setScholarships(res.data);
    } catch (err) {
      console.error("Error fetching scholarships", err);
    }
  };

  // ✅ GET USER APPLICATIONS
  const fetchApplications = async () => {
    try {
      const userId = localStorage.getItem("userId"); // ✅ FIXED

      const res = await API.get(`/applications/user/${userId}`);
      setApplications(res.data);

    } catch (err) {
      console.error("Error fetching applications", err);
    }
  };

  // ✅ APPLY FUNCTION
  const handleApply = async (scholarshipId) => {
    try {
      const userId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");

      await API.post("/applications/apply", {
        userId,
        scholarshipId,
        name: "Student",
        email,
        phone: "9876543210"
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
        placeholder="Search by title..."
        className="search"
      />

      <div className="grid">
        {scholarships.map((s) => {

          const alreadyApplied = applications.some(
            (a) => a.scholarshipId === s.id
          );

          return (
            <div key={s.id} className="card">

              <h3>{s.title}</h3>
              <p className="desc">{s.description}</p>

              <div className="meta">
                <span>₹{s.amount}</span>
                <span>{s.deadline || "N/A"}</span>
              </div>

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