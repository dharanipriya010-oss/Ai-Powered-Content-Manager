import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-page">

        <div className="hero-section">

          <h1>
            🤖 AI Powered Content Manager
          </h1>

          <p>
            Create, Manage and Publish
            AI Generated Content Faster.
          </p>

          <div className="hero-buttons">

            <a href="/create-post">
              <button className="primary-btn">
                Create Content
              </button>
            </a>

            <a href="/dashboard">
              <button className="secondary-btn">
                View Dashboard
              </button>
            </a>

          </div>

        </div>

        <div className="stats-section">

          <div className="stat-card">
            <h2>🚀</h2>
            <h3>AI Generation</h3>
            <p>Create content instantly using Gemini AI.</p>
          </div>

          <div className="stat-card">
            <h2>📊</h2>
            <h3>Analytics</h3>
            <p>Track posts and performance easily.</p>
          </div>

          <div className="stat-card">
            <h2>☁️</h2>
            <h3>Cloud Ready</h3>
            <p>Store and manage content securely.</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;