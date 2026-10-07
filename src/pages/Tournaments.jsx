import "./Tournaments.css";

const tournaments = [
  {
    number: "01",
    icon: "🏏",
    sport: "CRICKET",
    title: "ICC T20 World Cup",
    description:
      "A global cricket tournament featuring the world's strongest T20 teams.",
    status: "INTERNATIONAL",
  },
  {
    number: "02",
    icon: "🏎️",
    sport: "FORMULA 1",
    title: "F1 World Championship",
    description:
      "The ultimate season-long battle between drivers and constructors.",
    status: "WORLD CHAMPIONSHIP",
  },
  {
    number: "03",
    icon: "🤼",
    sport: "KABADDI",
    title: "Pro Kabaddi League",
    description:
      "One of the biggest professional kabaddi competitions in the world.",
    status: "PRO LEAGUE",
  },
  {
    number: "04",
    icon: "🏆",
    sport: "CRICKET",
    title: "Indian Premier League",
    description:
      "A high-energy cricket league bringing together elite players and franchises.",
    status: "T20 LEAGUE",
  },
  {
    number: "05",
    icon: "🏁",
    sport: "FORMULA 1",
    title: "Grand Prix",
    description:
      "Individual race weekends held across iconic circuits around the world.",
    status: "RACING EVENT",
  },
  {
    number: "06",
    icon: "🔥",
    sport: "KABADDI",
    title: "Kabaddi Championship",
    description:
      "Competitive kabaddi featuring teams fighting for championship glory.",
    status: "CHAMPIONSHIP",
  },
];

function Tournaments() {
  return (
    <div className="tournaments-page">

      <section className="tournaments-hero">
        <div className="tournaments-hero-content">
          <p className="section-label">
            SPORTIVE WORLD • TOURNAMENTS
          </p>

          <h1>
            WHERE
            <span>CHAMPIONS</span>
            ARE MADE.
          </h1>

          <p>
            Explore the tournaments and competitions that
            create sporting history.
          </p>
        </div>

        <div className="tournaments-symbol">
          🏆
        </div>
      </section>

      <section className="tournaments-section section">
        <div className="container">

          <div className="tournaments-heading">
            <div>
              <p className="section-label">COMPETITIONS</p>

              <h2>
                The Biggest
                <span> Stages.</span>
              </h2>
            </div>

            <p>
              From international championships to professional
              leagues, explore competitions across Sportive World.
            </p>
          </div>

          <div className="tournament-grid">

            {tournaments.map((tournament) => (
              <div
                className="tournament-card"
                key={tournament.number}
              >

                <div className="tournament-top">
                  <span>{tournament.number}</span>
                  <span>{tournament.sport}</span>
                </div>

                <div className="tournament-icon">
                  {tournament.icon}
                </div>

                <h3>{tournament.title}</h3>

                <p>{tournament.description}</p>

                <div className="tournament-status">
                  {tournament.status}
                </div>

                <button>
                  Explore Tournament →
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="tournaments-stats section">
        <div className="container">

          <div className="tournaments-stats-box">

            <p className="section-label">
              THE COMPETITIVE WORLD
            </p>

            <h2>
              Every tournament has
              <span> a story.</span>
            </h2>

            <div className="tournament-stat-grid">

              <div>
                <strong>06</strong>
                <span>Featured Events</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Sports</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Matches</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Moments</span>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Tournaments;