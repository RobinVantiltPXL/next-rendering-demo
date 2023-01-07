import styles from '../styles/Character.module.css'

export default function Character({char}) {
    return (
        <div className={styles.character}>
            <p>{char.name}</p>
            <p>{char.homeworld}</p>
            <img src={char.image} alt={char.name} loading="lazy"/>
        </div>
    )
}