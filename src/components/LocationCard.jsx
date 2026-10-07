import "./LocationCard.css";

function LocationCard() {
  return (
    <div id="location-app">
      <div className="reference relative">
        <p className="location-main-title">
          Location{" "}
          <span className="hover-card">
            Guntur
          </span>
          , India
        </p>

        <div className="location-card absolute">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>

          <div className="relative inner-card">
            <div className="bg-map"></div>

            <div className="location absolute"></div>

            <div className="elements">
              <div className="description relative">
                <div className="blur-item absolute"></div>

                <span className="location-main-title">
                  Sportive World
                </span>

                <p className="second-title">
                  Guntur, India
                </p>
              </div>

              <div className="details">
                <div className="peoples">
                  <div className="people"></div>
                  <div className="people"></div>
                  <div className="people"></div>
                </div>

                <div className="action"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;