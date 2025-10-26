import styles from "./Choice.module.css"

export const Choice = ({sticker}) => {
    if (sticker === null) {
        return (
            <div className={styles.div}>
                <h2 className={styles.title}>Press on any sticker</h2>
            </div>
        );
    }

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>You selected this sticker</h2>
            <img src={sticker.img} alt={sticker.label} />
            <p className={styles.text}>{sticker.label}</p>
        </div>
    );
}