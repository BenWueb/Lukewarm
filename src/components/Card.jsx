import { useNavigate } from "react-router-dom";

function Card({ title, subtitle, price, description, category, imgUrl, id }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/listings/${id}`);
  };

  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p className="card-subtitle">{subtitle}</p>
          <p className="card-description">{description}</p>
        </div>
        <button onClick={onClick} className="card-link card-btn">
          View item
        </button>
      </div>
    </div>
  );
}
export default Card;
