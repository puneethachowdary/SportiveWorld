import "./Sports3DCarousel.css";

const sports = [
  {
    name: "CRICKET",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "FORMULA 1",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "KABADDI",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "FOOTBALL",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "BASKETBALL",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "TENNIS",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=500&q=80",
  },
];

function Sports3DCarousel() {
  return (
    <div className="sports-carousel-wrapper">
      <div
        className="sports-carousel-inner"
        style={{
          "--quantity": sports.length,
        }}
      >
        {sports.map((sport, index) => (
          <div
            className="sports-carousel-card"
            key={sport.name}
            style={{
              "--index": index,
              "--color-card": "37, 99, 235",
            }}
          >
            <img
              src={sport.image}
              alt={sport.name}
              className="sports-carousel-img"
            />

            <div className="sports-carousel-overlay">
              <span>{sport.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports3DCarousel;