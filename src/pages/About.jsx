import LocationCard from "../components/LocationCard";
import "./About.css";
const features = [
  {
    icon: "🏏",
    title: "Cricket",
    text: "Matches, players, teams, tournaments and legendary records.",
  },
  {
    icon: "🏎️",
    title: "Formula 1",
    text: "Drivers, constructors, circuits, races and championship stories.",
  },
  {
    icon: "🤼",
    title: "Kabaddi",
    text: "Teams, players, matches, leagues and unforgettable battles.",
  },
];

function About() {
  return (
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="section-label">
            SPORTIVE WORLD • ABOUT
          </p>

          <h1>
            ONE PLACE.
            <span>EVERY SPORT.</span>
          </h1>

          <p>
            Sportive World is a modern sports information
            platform designed to bring the excitement of
            multiple sports together in one place.
          </p>

        </div>

        <div className="about-symbol">
          ⚡
        </div>

      </section>
<section className="about-location-section">
  <LocationCard />
</section>
      {/* STORY */}

      <section className="about-story section">

        <div className="container">

          <div className="about-story-grid">

            <div>
              <p className="section-label">
                OUR STORY
              </p>

              <h2>
                Built for people
                <span> who love sports.</span>
              </h2>
            </div>

            <div className="about-story-text">

              <p>
                Sportive World brings together information
                about cricket, Formula 1 and kabaddi through
                a clean, interactive and visually engaging
                experience.
              </p>

              <p>
                The goal is simple — make it easier for sports
                fans to explore players, matches, tournaments
                and records without jumping between different
                platforms.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SPORTS */}

      <section className="about-sports section">

        <div className="container">

          <div className="about-heading">

            <div>

              <p className="section-label">
                WHAT WE COVER
              </p>

              <h2>
                Three Sports.
                <span> One World.</span>
              </h2>

            </div>

          </div>

          <div className="about-feature-grid">

            {features.map((feature, index) => (

              <div
                className="about-feature-card"
                key={index}
              >

                <div className="about-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MISSION */}

      <section className="about-mission section">

        <div className="container">

          <div className="mission-box">

            <div>

              <p className="section-label">
                OUR MISSION
              </p>

              <h2>
                Make sports
                <span> easier to explore.</span>
              </h2>

              <p>
                We combine useful sports information with
                modern design, smooth interactions and
                engaging visual experiences.
              </p>

            </div>

            <div className="mission-icon">
              🏆
            </div>

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}

      <section className="about-tech section">

        <div className="container">

          <p className="section-label">
            BUILT WITH
          </p>

          <h2>
            Modern
            <span> Technology.</span>
          </h2>

          <div className="tech-grid">

            <div>
              <strong>React</strong>
              <span>Frontend Framework</span>
            </div>

            <div>
              <strong>JavaScript</strong>
              <span>Interactive Experience</span>
            </div>

            <div>
              <strong>CSS</strong>
              <span>Visual Design</span>
            </div>

            <div>
              <strong>Vite</strong>
              <span>Development Tool</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;