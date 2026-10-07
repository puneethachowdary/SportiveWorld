import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Sports3DCarousel from "../components/Sports3DCarousel";
const sports = [
  {
    id: 1,
    name: "Cricket",
    icon: "🏏",
    description: "Explore matches, players, records and cricket history.",
    color: "blue",
  },
  {
    id: 2,
    name: "Formula 1",
    icon: "🏎️",
    description: "Discover drivers, teams, circuits and racing statistics.",
    color: "red",
  },
  {
    id: 3,
    name: "Kabaddi",
    icon: "🤼",
    description: "Follow teams, players, matches and unforgettable moments.",
    color: "orange",
  },
];

const matches = [
  {
    sport: "CRICKET",
    team1: "India",
    team2: "Australia",
    score1: "184/4",
    score2: "176/8",
    status: "COMPLETED",
    icon: "🏏",
  },
  {
    sport: "FORMULA 1",
    team1: "Max Verstappen",
    team2: "Charles Leclerc",
    score1: "P1",
    score2: "P2",
    status: "RACE RESULT",
    icon: "🏎️",
  },
  {
    sport: "KABADDI",
    team1: "Telugu Titans",
    team2: "Jaipur Panthers",
    score1: "34",
    score2: "31",
    status: "COMPLETED",
    icon: "🤼",
  },
];

const stats = [
  {
    number: "03",
    label: "Sports",
  },
  {
    number: "100+",
    label: "Players",
  },
  {
    number: "50+",
    label: "Matches",
  },
  {
    number: "25+",
    label: "Records",
  },
];

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-background">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>
          <div className="floating-ball ball-one">⚽</div>
          <div className="floating-ball ball-two">🏀</div>
          <div className="floating-ball ball-three">🏏</div>
        </div>

        <div className="hero-content">

          <p className="hero-small-text">
            THE WORLD OF SPORTS
          </p>

          <h1>
            SPORTIVE
            <span>WORLD</span>
          </h1>

          <p className="hero-description">
            Explore the passion, competition and stories behind
            the world's most exciting sports.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("sports")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Sports
              <span>→</span>
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("matches")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Matches
            </button>
          </div>

        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line"></div>
        </div>

      </section>

<section className="featured-sports-section">
  <div className="container">
    <p className="featured-label">EXPLORE THE SPORTS</p>

    <h2 className="section-title">
      THE SPORTS <span>WE COVER</span>
    </h2>

    <p className="section-subtitle">
      Discover the biggest moments, legendary players,
      tournaments and records across the world of sports.
    </p>

    <Sports3DCarousel />
  </div>
</section>
      {/* ================= SPORTS ================= */}
      <section className="sports-section" id="sports">

        <div className="section-heading">
          <div>
            <p className="section-label">EXPLORE</p>
            <h2>Choose Your Sport</h2>
          </div>

          <p className="section-description">
            Dive into detailed information about your favorite
            sports, players, teams and competitions.
          </p>
        </div>


        <div className="sports-grid">

          {sports.map((sport) => (
            <div
              className={`sport-card ${sport.color}`}
              key={sport.id}
            >

              <div className="sport-card-top">
                <span className="sport-number">
                  0{sport.id}
                </span>

                <span className="sport-icon">
                  {sport.icon}
                </span>
              </div>

              <div className="sport-card-content">

                <h3>{sport.name}</h3>

                <p>
                  {sport.description}
                </p>

                <button className="card-link">
                  Explore
                  <span>↗</span>
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* ================= FEATURED MATCHES ================= */}
      <section className="matches-section" id="matches">

        <div className="section-heading">
          <div>
            <p className="section-label">MATCH CENTER</p>
            <h2>Featured Matches</h2>
          </div>

          <button className="view-all-btn">
            View All →
          </button>
        </div>


        <div className="matches-grid">

          {matches.map((match, index) => (
            <div className="match-card" key={index}>

              <div className="match-header">

                <span className="match-sport">
                  {match.icon} {match.sport}
                </span>

                <span className="match-status">
                  {match.status}
                </span>

              </div>


              <div className="teams">

                <div className="team">
                  <div className="team-icon">
                    {match.team1.charAt(0)}
                  </div>

                  <h3>{match.team1}</h3>

                  <strong>
                    {match.score1}
                  </strong>
                </div>


                <div className="vs">
                  VS
                </div>


                <div className="team">
                  <div className="team-icon">
                    {match.team2.charAt(0)}
                  </div>

                  <h3>{match.team2}</h3>

                  <strong>
                    {match.score2}
                  </strong>
                </div>

              </div>


              <button className="match-details">
                Match Details →
              </button>

            </div>
          ))}

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="stats-content">

          <div className="stats-title">

            <p className="section-label">
              SPORTIVE WORLD
            </p>

            <h2>
              Everything Sports.
              <br />
              <span>One Place.</span>
            </h2>

          </div>


          <div className="stats-grid">

            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>

                <h3>{stat.number}</h3>

                <p>{stat.label}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="cta-box">

          <div className="cta-content">

            <p className="section-label">
              READY?
            </p>

            <h2>
              Find Your
              <span> Sport.</span>
            </h2>

            <p>
              Explore players, matches, tournaments and
              legendary records from the world of sports.
            </p>

            <button className="primary-btn">
              Start Exploring
              <span>→</span>
            </button>

          </div>


          <div className="cta-symbol">
            🏆
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-logo">
          SPORTIVE <span>WORLD</span>
        </div>

        <p>
          Where passion meets the game.
        </p>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Sportive World. All rights reserved.
        </p>

      </footer>

    </div>
  );
}
export default Home;