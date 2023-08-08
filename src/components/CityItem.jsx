import styles from "./CityItem.module.css";
import { useNavigate } from "react-router-dom";
import { formatDate } from "./City";
import { useCities } from "../contexts/CitiesContext";
export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const navigate = useNavigate();
  const { lat, lng } = position;
  const { currentCity, deleteCity } = useCities();
  return (
    <li
      className={`${styles.cityItem} ${
        id === currentCity.id ? styles["cityItem--active"] : ""
      }`}
      onClick={() => navigate(`${id}?lat=${lat}&lng=${lng}`)}
    >
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button
        className={styles.deleteBtn}
        onClick={(e) => {
          e.stopPropagation();
          deleteCity(id);
        }}
      >
        &times;
      </button>
    </li>
  );
}
