import styles from "./Sticker.module.css";

export const Sticker = ({ img, label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={img} alt={label} className={styles.image} />
      <p className={styles.label}>{label}</p>
    </button>
  );
}