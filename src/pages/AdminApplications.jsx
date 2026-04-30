import { useEffect, useState } from "react";
import API from "../api/axios";
import "../styles/Applications.css";

const StudentApplications = () => {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchApplications = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await API.get(`/applications/user/${userId}`);
        setApplications(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();

  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>

      <h1>My Applications</h1>
      <p className="subtitle">
        View and track your scholarship applications
      </p>

      {applications.length === 0 ? (
        <div className="card center">
          <p className="muted">
            You haven’t applied for any scholarships yet.
          </p>
        </div>
      ) : (
        applications.map((app) => (
          <div key={app.id} className="card">
            <h3>{app.scholarshipTitle}</h3>
            <p>Status: {app.status}</p>
          </div>
        ))
      )}

    </div>
  );
};

export default StudentApplications;