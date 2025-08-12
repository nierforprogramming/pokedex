import "./NewsCard.css";

const NewsCard = ({ pokemonNews }) => {
  return (
    <div className="news-card">
      <div className="news-card-container">
        <div className="news-right">
          <div className="image">
            <img src={pokemonNews?.image} alt={pokemonNews?.title} />
          </div>
        </div>
        <div className="news-left">
          <div className="news-title">
            <h1>{pokemonNews?.title}</h1>
          </div>
          <div className="news-date">
            <p>{pokemonNews?.publish_date?.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
