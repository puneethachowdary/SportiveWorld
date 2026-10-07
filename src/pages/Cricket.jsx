import "./Cricket.css";

const cricketSections = [
  {
    title: "Live Scores",
    icon: "🏏",
    text: "Follow match scores, results and important moments from the world of cricket.",
  },
  {
    title: "Players",
    icon: "👤",
    text: "Explore famous cricket players, their careers, achievements and statistics.",
  },
  {
    title: "Teams",
    icon: "🌍",
    text: "Discover international and domestic cricket teams and their journeys.",
  },
  {
    title: "Records",
    icon: "🏆",
    text: "Check remarkable batting, bowling and team records from cricket history.",
  },
];

const featuredMatches = [
  {
    team1: "India",
    team2: "Australia",
    score1: "184/4",
    score2: "176/8",
    result: "India won by 8 runs",
  },
  {
    team1: "England",
    team2: "South Africa",
    score1: "172/6",
    score2: "168/9",
    result: "England won by 4 runs",
  },
  {
    team1: "New Zealand",
    team2: "Pakistan",
    score1: "181/5",
    score2: "179/7",
    result: "New Zealand won by 2 runs",
  },
];

function Cricket() {
  return (
    <div className="cricket-page">

      {/* HERO */}
      <section className="cricket-hero">
        <div className="cricket-hero-glow"></div>

        <div className="cricket-hero-content">
          <p className="cricket-label">SPORTIVE WORLD • CRICKET</p>

          <h1>
            THE GAME
            <span>OF CRICKET.</span>
          </h1>

          <p>
            Explore matches, players, teams, tournaments and
            legendary records from the world of cricket.
          </p>

          <div className="cricket-hero-buttons">
            <a href="#matches" className="primary-btn">
              View Matches →
            </a>

            <a href="#explore-cricket" className="secondary-btn">
              Explore Cricket
            </a>
          </div>
        </div>

        <div className="cricket-ball">
          🏏
        </div>
      </section>

      {/* INTRO */}
      <section className="cricket-intro section">
        <div className="container">
          <p className="section-label">ABOUT THE SPORT</p>

          <h2>
            More Than Just
            <span> A Game.</span>
          </h2>

          <p className="cricket-intro-text">
            Cricket is a sport built around strategy, skill,
            teamwork and unforgettable moments. Discover
            everything from international matches to legendary
            players and historic records.
          </p>
        </div>
      </section>

      {/* EXPLORE */}
      <section
        className="cricket-explore section"
        id="explore-cricket"
      >
        <div className="container">

          <div className="cricket-heading">
            <div>
              <p className="section-label">EXPLORE</p>
              <h2>Everything Cricket.</h2>
            </div>

            <p>
              Discover the different sides of the game in one place.
            </p>
          </div>

          <div className="cricket-cards">
            {cricketSections.map((item, index) => (
              <div className="cricket-card" key={index}>
                <div className="cricket-card-number">
                  0{index + 1}
                </div>

                <div className="cricket-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <button>
                  Explore →
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MATCHES */}
      <section
        className="cricket-matches section"
        id="matches"
      >
        <div className="container">

          <div className="cricket-heading">
            <div>
              <p className="section-label">MATCH CENTER</p>
              <h2>Featured Matches</h2>
            </div>

            <span className="live-indicator">
              ● MATCH RESULTS
            </span>
          </div>

          <div className="cricket-match-grid">
            {featuredMatches.map((match, index) => (
              <div className="cricket-match-card" key={index}>

                <div className="match-top">
                  <span>CRICKET</span>
                  <span>COMPLETED</span>
                </div>

                <div className="cricket-teams">

                  <div className="cricket-team">
                    <div className="team-circle">
                      {match.team1.charAt(0)}
                    </div>

                    <h3>{match.team1}</h3>
                    <strong>{match.score1}</strong>
                  </div>

                  <div className="cricket-vs">
                    VS
                  </div>

                  <div className="cricket-team">
                    <div className="team-circle">
                      {match.team2.charAt(0)}
                    </div>

                    <h3>{match.team2}</h3>
                    <strong>{match.score2}</strong>
                  </div>

                </div>

                <div className="match-result">
                  {match.result}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CRICKET FACTS */}
      <section className="cricket-stats section">
        <div className="container">

          <div className="cricket-stats-box">

            <div className="cricket-stats-title">
              <p className="section-label">
                CRICKET AT A GLANCE
              </p>

              <h2>
                The Numbers
                <span> Behind The Game.</span>
              </h2>
            </div>

            <div className="cricket-stat-grid">

              <div>
                <strong>3</strong>
                <span>Formats</span>
              </div>

              <div>
                <strong>11</strong>
                <span>Players / Team</span>
              </div>

              <div>
                <strong>20</strong>
                <span>Overs in T20</span>
              </div>

              <div>
                <strong>100+</strong>
                <span>Years of History</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cricket-cta section">
        <div className="container">

          <div className="cricket-cta-box">

            <div>
              <p className="section-label">
                KEEP EXPLORING
              </p>

              <h2>
                Ready to enter
                <span> the stadium?</span>
              </h2>

              <p>
                Explore players, tournaments and legendary
                cricket records on Sportive World.
              </p>
            </div>

            <div className="cricket-trophy">
              🏆
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Cricket;