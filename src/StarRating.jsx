import "./pokemon.css";
import { FaStar } from "react-icons/fa";
const StarRating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? "star filled" : "star"} />
      ))}
    </div>
  );
};

export default StarRating;
