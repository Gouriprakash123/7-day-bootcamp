import { useState } from "react";
import "./App.css";
import profile from "./assets/1111.png";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Details Submitted!\n\nName: ${name}\nEmail: ${email}`
    );

    setName("");
    setEmail("");
  };

  return (
    <>
      <header>
        <nav>
          <h2>My Porfolio</h2>

          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <ul
            id="nav-links"
            className={menuOpen ? "show" : ""}
          >
            <li><a href="#profile">Profile</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button>Get Started</button>
        </nav>
      </header>

      <section className="profile-section" id="profile">
        <div className="profile-container">
          <div className="profile-text">
            <h2>Goury Prakash</h2>
            <p>
              Frontend developer with a passion for creating responsive
              and user-friendly websites.
            </p>
          </div>

          <div className="profile-image">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About</h2>
        <p>
          I'm a B.Tech student passionate about technology and web development.
          I am currently learning HTML and CSS.
        </p>
      </section>

      <section className="skills-section" id="skills">
        <h2>Skills</h2>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
        </ol>
      </section>

      <section className="contact-section" id="contact">
        <h2>Contact</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name :</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email :</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
        </section>
        
        {/* My Card Button */}
        <section className="my-card-section">
        <button
          className="my-card-btn"
          onClick={() => setShowCard(!showCard)}
        >
          {showCard ? "Hide My Card" : "Show My Card"}
        </button>

        {/* Card */}
        {showCard && (
          <div className="profile-card">
            <img src={profile} alt="Profile" />

            <h3>Goury Prakash</h3>

            <p>Frontend Developer</p>

            <p>💻 HTML | CSS | React</p>

            <p>gouriprakash@example.com</p>
          </div>
        )}
      </section>
    </>
  );
}

export default App;