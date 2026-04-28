const Home = () => {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <p className="badge">Over $2.5 Million in Scholarships Available</p>

        <h1>
          Find and Track Your <span>Scholarship</span> Journey
        </h1>

        <p className="subtitle">
          Discover scholarships tailored to your profile, streamline your
          applications, and never miss a deadline.
        </p>

        <p className="small-text">
          Free to use. No credit card required.
        </p>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Scholarships Available</p>
        </div>
        <div className="stat-card">
          <h2>$2.5M+</h2>
          <p>Total Funding</p>
        </div>
        <div className="stat-card">
          <h2>10,000+</h2>
          <p>Students Helped</p>
        </div>
        <div className="stat-card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features">
        <h2>Everything You Need to Succeed</h2>
        <p className="section-sub">
          Our platform provides all the tools students need to find, apply for,
          and manage scholarships.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>Smart Search</h3>
            <p>Find scholarships matching your profile.</p>
          </div>

          <div className="feature-card">
            <h3>Easy Applications</h3>
            <p>Apply quickly with simple forms.</p>
          </div>

          <div className="feature-card">
            <h3>Deadline Tracking</h3>
            <p>Never miss deadlines again.</p>
          </div>

          <div className="feature-card">
            <h3>Status Updates</h3>
            <p>Track application progress easily.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">01<br />Create Profile</div>
          <div className="step">02<br />Browse Scholarships</div>
          <div className="step">03<br />Apply Easily</div>
          <div className="step">04<br />Track Progress</div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="scholarships">
        <h2>Explore Scholarship Categories</h2>

        <div className="categories">
          <div className="category-card">Merit-Based</div>
          <div className="category-card">Need-Based</div>
          <div className="category-card">STEM Fields</div>
          <div className="category-card">Arts & Humanities</div>
        </div>
      </section>

    </div>
  );
};

export default Home;