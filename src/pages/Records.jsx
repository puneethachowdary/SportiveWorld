import "./Records.css";

const records = [
  {
    rank: "01",
    sport: "CRICKET",
    icon: "🏏",
    title: "Highest Individual Score",
    value: "264",
    holder: "Rohit Sharma",
    detail: "ODI Cricket",
  },
  {
    rank: "02",
    sport: "CRICKET",
    icon: "🏏",
    title: "Most International Runs",
    value: "27K+",
    holder: "Virat Kohli",
    detail: "International Cricket",
  },
  {
    rank: "03",
    sport: "FORMULA 1",
    icon: "🏎️",
    title: "Most Race Wins",
    value: "100+",
    holder: "Lewis Hamilton",
    detail: "Formula 1",
  },
  {
    rank: "04",
    sport: "FORMULA 1",
    icon: "🏁",
    title: "Most Pole Positions",
    value: "100+",
    holder: "Lewis Hamilton",
    detail: "Formula 1",
  },
  {
    rank: "05",
    sport: "KABADDI",
    icon: "🤼",
    title: "Raid Points",
    value: "1000+",
    holder: "Legendary Raiders",
    detail: "Professional Kabaddi",
  },
  {
    rank: "06",
    sport: "KABADDI",
    icon: "🛡️",
    title: "Defensive Points",
    value: "500+",
    holder: "Elite Defenders",
    detail: "Professional Kabaddi",
  },
];

function Records() {
  return (
    <div className="records-page">

      {/* HERO */}
      <section className="records-hero">

        <div className="records-hero-content">

          <p className="section-label">
            SPORTIVE WORLD • RECORDS
          </p>

          <h1>
            NUMBERS
            <span>THAT MADE</span>
            HISTORY.
          </h1>

          <p>
            Explore extraordinary performances, legendary
            achievements and records across the world of sports.
          </p>

        </div>

        <div className="records-hero-symbol">
          📊
        </div>

      </section>

      {/* RECORDS */}
      <section className="records-section section">

        <div className="container">

          <div className="records-heading">

            <div>

              <p className="section-label">
                ALL-TIME GREATS
              </p>

              <h2>
                Records That
                <span> Matter.</span>
              </h2>

            </div>

            <p>
              Discover remarkable numbers achieved by
              athletes and teams across multiple sports.
            </p>

          </div>

          <div className="records-grid">

            {records.map((record) => (

              <div
                className="record-card"
                key={record.rank}
              >

                <div className="record-top">

                  <span className="record-rank">
                    {record.rank}
                  </span>

                  <span className="record-sport">
                    {record.icon} {record.sport}
                  </span>

                </div>

                <div className="record-icon">
                  {record.icon}
                </div>

                <h3>
                  {record.title}
                </h3>

                <div className="record-value">
                  {record.value}
                </div>

                <div className="record-holder">
                  <span>RECORD HOLDER</span>
                  <strong>{record.holder}</strong>
                </div>

                <p className="record-detail">
                  {record.detail}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED RECORD */}
      <section className="featured-record section">

        <div className="container">

          <div className="featured-record-box">

            <div className="featured-record-content">

              <p className="section-label">
                RECORD BREAKERS
              </p>

              <h2>
                Greatness is
                <span> measured.</span>
              </h2>

              <p>
                Behind every record is years of discipline,
                preparation, pressure and an athlete refusing
                to settle for ordinary.
              </p>

            </div>

            <div className="featured-number">
              100+
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Records;