import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddScholarship = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    const scholarships =
      JSON.parse(localStorage.getItem("scholarships")) || [];

    scholarships.push({ ...data, id: Date.now() });

    localStorage.setItem("scholarships", JSON.stringify(scholarships));
    navigate("/admin");
  };

  return (
    <div className="auth-container">
      <h2>Add Scholarship</h2>
      <input placeholder="Title" onChange={(e) => setData({...data, title:e.target.value})} />
      <input placeholder="Description" onChange={(e) => setData({...data, description:e.target.value})} />
      <input placeholder="Amount" onChange={(e) => setData({...data, amount:e.target.value})} />
      <input type="date" onChange={(e) => setData({...data, deadline:e.target.value})} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddScholarship;