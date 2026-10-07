import "./Kabaddi.css";

const kabaddiFeatures = [
  {
    number: "01",
    icon: "🤼",
    title: "Teams",
    description:
      "Explore kabaddi teams, their squads, rivalries and journeys through competitive seasons.",
  },
  {
    number: "02",
    icon: "⚡",
    title: "Raiders",
    description:
      "Discover explosive raiders known for agility, quick thinking and match-winning performances.",
  },
  {
    number: "03",
    icon: "🛡️",
    title: "Defenders",
    description:
      "Learn about powerful defenders and the techniques used to stop attacking players.",
  },
  {
    number: "04",
    icon: "🏆",
    title: "Leagues",
    description:
      "Explore major kabaddi competitions, memorable finals and championship moments.",
  },
];

const kabaddiMatches = [
  {
    team1: "Telugu Titans",
    team2: "Jaipur Panthers",
    score1: "34",
    score2: "31",
    result: "Telugu Titans won",
  },
  {
    team1: "Patna Pirates",
    team2: "U Mumba",
    score1: "39",
    score2: "35",
    result: "Patna Pirates won",
  },
  {
    team1: "Bengal Warriors",
    team2: "Haryana Steelers",
    score1: "28",
    score2: "28",
    result: "Match Drawn",
  },
];

function Kabaddi() {
  return (
    <div className="kabaddi-page">

      {/* HERO */}
      <section className="kabaddi-hero">

        <div className="kabaddi-glow"></div>

        <div className="kabaddi-hero-content">

          <p className="kabaddi-label">
            SPORTIVE WORLD • KABADDI
          </p>

          <h1>
            POWER.
            <span>AGILITY.</span>
            PASSION.
          </h1>

          <p>
            Step onto the mat and discover the intensity,
            strategy and raw energy of kabaddi.
          </p>

          <div className="kabaddi-buttons">

            <a href="#kabaddi-matches" className="primary-btn">
              View Matches →
            </a>

            <a
              href="#kabaddi-explore"
              className="secondary-btn"
            >
              Explore Kabaddi
            </a>

          </div>

        </div>

        <div className="kabaddi-symbol">
          🤼
        </div>

      </section>

      {/* INTRO */}
      <section className="kabaddi-intro section">

        <div className="container">

          <p className="section-label">
            THE SPIRIT OF KABADDI
          </p>

          <h2>
            One Breath.
            <span> One Raid.</span>
          </h2>

          <p className="kabaddi-intro-text">
            Kabaddi combines speed, strength, balance and strategy.
            Every raid can change the match, while every defensive
            move demands perfect teamwork and timing.
          </p>

        </div>

      </section>

      {/* FEATURES */}
      <section
        className="kabaddi-explore section"
        id="kabaddi-explore"
      >

        <div className="container">

          <div className="kabaddi-heading">

            <div>

              <p className="section-label">
                EXPLORE KABADDI
              </p>

              <h2>
                Inside the
                <span> Mat.</span>
              </h2>

            </div>

            <p>
              Explore teams, players, techniques and
              competitions that define modern kabaddi.
            </p>

          </div>

          <div className="kabaddi-feature-grid">

            {kabaddiFeatures.map((feature) => (

              <div
                className="kabaddi-card"
                key={feature.number}
              >

                <span className="kabaddi-number">
                  {feature.number}
                </span>

                <div className="kabaddi-icon">
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

      {/* MATCHES */}
      <section
        className="kabaddi-matches section"
        id="kabaddi-matches"
      >

        <div className="container">

          <div className="kabaddi-heading">

            <div>

              <p className="section-label">
                MATCH CENTER
              </p>

              <h2>
                Recent
                <span> Battles.</span>
              </h2>

            </div>

            <span className="kabaddi-status">
              ● COMPLETED
            </span>

          </div>

          <div className="kabaddi-match-grid">

            {kabaddiMatches.map((match, index) => (

              <div
                className="kabaddi-match-card"
                key={index}
              >

                <div className="kabaddi-match-top">
                  <span>KABADDI</span>
                  <span>RESULT</span>
                </div>

                <div className="kabaddi-teams">

                  <div>
                    <div className="kabaddi-team-icon">
                      {match.team1.charAt(0)}
                    </div>

                    <h3>{match.team1}</h3>

                    <strong>{match.score1}</strong>
                  </div>

                  <span className="kabaddi-vs">
                    VS
                  </span>

                  <div>
                    <div className="kabaddi-team-icon">
                      {match.team2.charAt(0)}
                    </div>

                    <h3>{match.team2}</h3>

                    <strong>{match.score2}</strong>
                  </div>

                </div>

                <div className="kabaddi-result">
                  {match.result}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="kabaddi-stats section">

        <div className="container">

          <div className="kabaddi-stats-box">

            <div className="kabaddi-stats-title">

              <p className="section-label">
                KABADDI BY NUMBERS
              </p>

              <h2>
                Fast.
                <span> Fearless.</span>
              </h2>

            </div>

            <div className="kabaddi-stat-grid">

              <div>
                <strong>7</strong>
                <span>Players / Team</span>
              </div>

              <div>
                <strong>40</strong>
                <span>Minutes</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Halves</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Winning Team</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="kabaddi-cta section">

        <div className="container">

          <div className="kabaddi-cta-box">

            <div>

              <p className="section-label">
                ENTER THE MAT
              </p>

              <h2>
                Ready for the
                <span> next raid?</span>
              </h2>

              <p>
                Discover teams, players, matches and
                unforgettable kabaddi moments.
              </p>

            </div>

            <div className="kabaddi-trophy">
              🏆
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Kabaddi;