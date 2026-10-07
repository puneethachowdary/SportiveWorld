import "./Players.css";

const players = [
  {
    rank: "01",
    name: "Virat Kohli",
    sport: "CRICKET",
    role: "Batter",
    country: "India",
    icon: "🏏",
  },
  {
    rank: "02",
    name: "Rohit Sharma",
    sport: "CRICKET",
    role: "Batter",
    country: "India",
    icon: "🏏",
  },
  {
    rank: "03",
    name: "Max Verstappen",
    sport: "FORMULA 1",
    role: "Driver",
    country: "Netherlands",
    icon: "🏎️",
  },
  {
    rank: "04",
    name: "Lando Norris",
    sport: "FORMULA 1",
    role: "Driver",
    country: "United Kingdom",
    icon: "🏎️",
  },
  {
    rank: "05",
    name: "Pardeep Narwal",
    sport: "KABADDI",
    role: "Raider",
    country: "India",
    icon: "🤼",
  },
  {
    rank: "06",
    name: "Maninder Singh",
    sport: "KABADDI",
    role: "Raider",
    country: "India",
    icon: "🤼",
  },
];

function Players() {
  return (
    <div className="players-page">

      <section className="players-hero">
        <div className="players-hero-content">
          <p className="section-label">SPORTIVE WORLD • PLAYERS</p>

          <h1>
            THE
            <span>CHAMPIONS.</span>
          </h1>

          <p>
            Meet the athletes and competitors who turn
            talent, discipline and determination into
            unforgettable sporting moments.
          </p>
        </div>

        <div className="players-hero-symbol">🏆</div>
      </section>

      <section className="players-section section">
        <div className="container">

          <div className="players-heading">
            <div>
              <p className="section-label">FEATURED ATHLETES</p>
              <h2>
                Stars of the
                <span> Game.</span>
              </h2>
            </div>

            <p>
              Explore some of the biggest names across
              cricket, Formula 1 and kabaddi.
            </p>
          </div>

          <div className="players-grid">
            {players.map((player) => (
              <div className="player-card" key={player.rank}>

                <div className="player-top">
                  <span>{player.rank}</span>
                  <span>{player.sport}</span>
                </div>

                <div className="player-avatar">
                  {player.icon}
                </div>

                <h3>{player.name}</h3>

                <p>{player.role}</p>

                <div className="player-country">
                  <span>COUNTRY</span>
                  <strong>{player.country}</strong>
                </div>

                <button>
                  View Profile →
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="players-stats section">
        <div className="container">

          <div className="players-stats-box">

            <div>
              <p className="section-label">PLAYER UNIVERSE</p>

              <h2>
                Talent has
                <span> no limits.</span>
              </h2>
            </div>

            <div className="players-stat-grid">
              <div>
                <strong>100+</strong>
                <span>Players</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Sports</span>
              </div>

              <div>
                <strong>25+</strong>
                <span>Records</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Memories</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Players;