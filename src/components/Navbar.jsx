import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      {/* LEFT */}
      <h2 className="logo" onClick={() => navigate("/")}>
        ScholarHub
      </h2>

      {/* CENTER */}
      <div className="nav-links">
        <span onClick={() => scrollToSection("features")}>Features</span>
        <span onClick={() => scrollToSection("how-it-works")}>
          How It Works
        </span>
        <span onClick={() => scrollToSection("scholarships")}>
          Scholarships
        </span>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="signin" onClick={() => navigate("/login")}>
          Sign In
        </button>
        <button className="getstarted" onClick={() => navigate("/register")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;