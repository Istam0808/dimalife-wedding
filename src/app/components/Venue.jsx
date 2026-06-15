import Reveal from "./Reveal";
import styles from "./Venue.module.scss";

const MAP_URL = "https://yandex.uz/maps/-/CPxQME~5";

export default function Venue() {
  return (
    <section className={styles.venue}>
      <img src="/garden/venue-deco.svg" alt="" className={styles.deco} aria-hidden />

      <div className={styles.inner}>
        <Reveal className={styles.text}>
          <img src="/garden/where-script.svg" alt="Где всё случится" className={styles.script} />
          <p className={styles.lead}>
            Наше торжество пройдёт в уютном банкетном зале ресторана
          </p>
          <h2 className={styles.place}>Crystal Plaza</h2>
          <p className={styles.address}>
            <img src="/garden/small-leaf.svg" alt="" aria-hidden />
            г. Самарканд, ул. Ахмаджана Кадыри, 19
          </p>
          <a className={styles.mapBtn} href={MAP_URL} target="_blank" rel="noopener noreferrer">
            посмотреть на карте
          </a>
        </Reveal>

        <Reveal className={styles.photoWrap} delay={120}>
          <img src="/garden/venue.jpg" alt="Площадка «Лесная Роса»" className={styles.photo} />
        </Reveal>
      </div>
    </section>
  );
}
