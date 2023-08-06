import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import { formatDate } from './City';
import { useCities } from '../contexts/CitiesContext';
export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { lat, lng } = position;
  const { currentCity } = useCities();
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles['cityItem--active'] : ''
        }`}
        to={`${id}?lat=${lat}&lng=${lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
