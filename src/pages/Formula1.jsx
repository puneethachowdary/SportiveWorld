import "./Formula1.css";

const f1Features = [
  {
    number: "01",
    icon: "🏎️",
    title: "Drivers",
    description:
      "Discover legendary and current Formula 1 drivers, their teams, careers and achievements.",
  },
  {
    number: "02",
    icon: "🏁",
    title: "Circuits",
    description:
      "Explore iconic circuits, challenging corners and unforgettable racing destinations.",
  },
  {
    number: "03",
    icon: "⚙️",
    title: "Teams",
    description:
      "Learn about Formula 1 constructors, their cars, history and championship battles.",
  },
  {
    number: "04",
    icon: "🏆",
    title: "Championships",
    description:
      "Explore championship victories, memorable seasons and historic Formula 1 moments.",
  },
];

const races = [
  {
    round: "ROUND 01",
    circuit: "Australian Grand Prix",
    location: "Melbourne",
    winner: "Max Verstappen",
    position: "P1",
  },
  {
    round: "ROUND 02",
    circuit: "Japanese Grand Prix",
    location: "Suzuka",
    winner: "Charles Leclerc",
    position: "P1",
  },
  {
    round: "ROUND 03",
    circuit: "Monaco Grand Prix",
    location: "Monte Carlo",
    winner: "Lando Norris",
    position: "P1",
  },
];

function Formula1() {
  return (
    <div className="f1-page">

      {/* HERO */}
      <section className="f1-hero">
        <div className="f1-speed-lines"></div>

        <div className="f1-hero-content">
          <p className="f1-label">
            SPORTIVE WORLD • FORMULA 1
          </p>

          <h1>
            SPEED.
            <span>PRECISION.</span>
            <strong>PASSION.</strong>
          </h1>

          <p className="f1-hero-description">
            Enter the world of Formula 1 — where engineering,
            strategy and fearless drivers meet at incredible speed.
          </p>

          <div className="f1-buttons">
            <a href="#races" className="primary-btn">
              Explore Races →
            </a>

            <a href="#f1-explore" className="secondary-btn">
              Discover F1
            </a>
          </div>
        </div>

        <div className="f1-car">
          🏎️
        </div>

        <div className="f1-track-number">
          01
        </div>
      </section>

      {/* INTRO */}
      <section className="f1-intro section">
        <div className="container">

          <p className="section-label">
            THE WORLD OF FORMULA 1
          </p>

          <h2>
            Built for
            <span> Speed.</span>
          </h2>

          <p className="f1-intro-text">
            Formula 1 combines cutting-edge technology, elite
            driving skill and strategic teamwork. Every race is
            a battle against the clock, the circuit and the competition.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section
        className="f1-explore section"
        id="f1-explore"
      >
        <div className="container">

          <div className="f1-heading">
            <div>
              <p className="section-label">
                EXPLORE FORMULA 1
              </p>

              <h2>
                Inside the
                <span> Paddock.</span>
              </h2>
            </div>

            <p>
              Discover the people, machines and places that
              make Formula 1 one of the world's greatest sports.
            </p>
          </div>

          <div className="f1-feature-grid">

            {f1Features.map((feature) => (
              <div className="f1-feature-card" key={feature.number}>

                <span className="f1-number">
                  {feature.number}
                </span>

                <div className="f1-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <button>
                  Explore →
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* RACES */}
      <section
        className="f1-races section"
        id="races"
      >
        <div className="container">

          <div className="f1-heading">
            <div>
              <p className="section-label">
                RACE CENTER
              </p>

              <h2>
                Grand Prix
                <span> Highlights.</span>
              </h2>
            </div>

            <span className="f1-status">
              ● RACE RESULTS
            </span>
          </div>

          <div className="race-list">

            {races.map((race, index) => (
              <div className="race-card" key={index}>

                <div className="race-round">
                  {race.round}
                </div>

                <div className="race-info">
                  <h3>{race.circuit}</h3>
                  <p>{race.location}</p>
                </div>

                <div className="race-winner">
                  <span>WINNER</span>
                  <strong>{race.winner}</strong>
                </div>

                <div className="race-position">
                  {race.position}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="f1-stats section">

        <div className="container">

          <div className="f1-stats-box">

            <div className="f1-stats-title">

              <p className="section-label">
                FORMULA 1 BY NUMBERS
              </p>

              <h2>
                Racing at
                <span> Full Throttle.</span>
              </h2>

            </div>

            <div className="f1-stat-grid">

              <div>
                <strong>20+</strong>
                <span>Race Weekends</span>
              </div>

              <div>
                <strong>10</strong>
                <span>Constructors</span>
              </div>

              <div>
                <strong>20</strong>
                <span>Full-Time Drivers</span>
              </div>

              <div>
                <strong>300+</strong>
                <span>KM/H Top Speed</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="f1-cta section">

        <div className="container">

          <div className="f1-cta-box">

            <div>
              <p className="section-label">
                FEEL THE SPEED
              </p>

              <h2>
                Lights out.
                <span> And away we go.</span>
              </h2>

              <p>
                Discover drivers, teams, circuits and legendary
                Formula 1 moments on Sportive World.
              </p>
            </div>

            <div className="f1-flag">
              🏁
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Formula1;