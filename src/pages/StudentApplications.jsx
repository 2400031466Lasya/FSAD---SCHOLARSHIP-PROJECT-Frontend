import "../styles/Applications.css";

const StudentApplications = () => {
  return (
    <div>
      <h1>My Applications</h1>
      <p className="subtitle">
        View and track your scholarship applications
      </p>

      <div className="card center">
        <p className="muted">
          You haven’t applied for any scholarships yet.
        </p>
      </div>
    </div>
  );
};

export default StudentApplications;