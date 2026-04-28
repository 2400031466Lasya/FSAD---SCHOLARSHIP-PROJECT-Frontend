const ScholarshipCard = ({ scholarship, onApply, isAdmin, onDelete }) => {
  return (
    <div className="card">
      <h3>{scholarship.title}</h3>
      <p>Amount: ₹{scholarship.amount}</p>
      <p>Deadline: {scholarship.deadline}</p>

      {!isAdmin && <button onClick={() => onApply(scholarship)}>Apply</button>}

      {isAdmin && (
        <button onClick={() => onDelete(scholarship.id)}>Delete</button>
      )}
    </div>
  );
};

export default ScholarshipCard;