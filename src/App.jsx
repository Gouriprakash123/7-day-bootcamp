import { useState } from "react";
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
    <div className="bg-slate-50 min-h-screen">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Portfolio</h2>

        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent p-4 md:p-0`}
        >
          <li><a href="#profile">Profile</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full">
          Get Started
        </button>
      </nav>

      {/* Profile */}
      <section
        id="profile"
        className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-16 bg-gradient-to-r from-blue-100 to-slate-100"
      >
        <div>
          <h2 className="text-5xl font-bold"style={{ color: "black" }}>
            Goury Prakash
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-lg">
            Frontend developer with a passion for creating responsive and user-friendly websites.
          </p>
        </div>

        <img
          src={profile}
          alt="Profile"
          className="w-72 h-72 rounded-full object-cover border-8 border-white shadow-xl"
        />
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg my-10"
      >
        <h2 className="text-3xl font-bold text-center text-black">About</h2>

        <p className="text-gray-700 leading-8">
          I'm a B.Tech student passionate about technology and web development.
          I am currently learning HTML and CSS.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg my-10"
      >
        <h2 className="text-3xl font-bold text-center text-black">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "C", "C++", "Java"].map((skill) => (
            <span
              key={skill}
              className="bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg my-10">
  <h2 className="text-3xl font-bold text-black text-center">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="p-6 border rounded-xl shadow-md">
      <h3 className="text-xl font-bold">Portfolio Website</h3>
      <p className="mt-2 text-gray-600">
        Built a responsive portfolio using React and Tailwind CSS.
      </p>
    </div>

    <div className="p-6 border rounded-xl shadow-md">
      <h3 className="text-xl font-bold">7-Day Bootcamp Project</h3>
      <p className="mt-2 text-gray-600">
        Created web pages using HTML, CSS, JavaScript and React.
      </p>
    </div>
    <div className="p-6 border rounded-xl shadow-md">
    <h3 className="text-xl font-semibold mt-6">
  Electricity Billing Management System
</h3>
<p className="text-gray-700">
  Developed an Electricity Billing Management System to manage customer records and generate electricity bills automatically.
  The system improves billing accuracy and simplifies customer data management.
</p>
</div>
<div className="p-6 border rounded-xl shadow-md">
<h3 className="text-xl font-semibold mt-6">
  Static Branch Prediction Analysis
</h3>
<p className="text-gray-700">
  Developed a Static Branch Prediction Analysis project using Assembly Language as part of Computer Organization and Architecture.
  The project evaluates branch prediction techniques and their impact on processor performance.
</p>
</div>
  </div>
</section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg my-10"
      >
        <h2 className="text-3xl font-bold text-center text-black">Contact</h2>

        <form
          className="max-w-md mx-auto space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="text-center my-10">
  <h2 className="text-3xl font-bold text-black mb-6">
    Connect With Me
  </h2>

  <div className="flex justify-center gap-4 flex-wrap">
    <a
      href="https://github.com/Gouriprakash123"
      target="_blank"
      rel="noreferrer"
      className="bg-black text-white px-6 py-3 rounded-lg"
    >
      GitHub
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg"
    >
      LinkedIn
    </a>
  </div>
</section>

      {/* My Card */}
      <section className="text-center my-12">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full"
          onClick={() => setShowCard(!showCard)}
        >
          {showCard ? "Hide My Card" : "Show My Card"}
        </button>

        {showCard && (
          <div className="max-w-sm mx-auto mt-6 bg-white p-6 rounded-2xl shadow-lg">
            <img
              src={profile}
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto border-4 border-sky-400"
            />

            <h3 className="text-xl font-bold mt-4">
              Goury Prakash
            </h3>

            <p className="text-gray-600">Frontend Developer</p>

            <p className="mt-2">💻 HTML | CSS | React</p>

            <p className="mt-2">
              📧 gouriprakash@example.com
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;