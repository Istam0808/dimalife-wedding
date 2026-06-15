import Reveal from "./Reveal";
import styles from "./Wishes.module.scss";

const CONTACT_URL = "mailto:anna@example.com";

export default function Wishes() {
  return (
    <section className={styles.wishes}>
      <img src="/garden/wishes-illustration.svg" alt="" className={styles.illustration} aria-hidden />

      <div className={styles.inner}>
        <Reveal as="h2" className={styles.title}>
          Пожелания
        </Reveal>

        <div className={styles.cards}>
          <Reveal className={styles.card}>
            <img src="/garden/gift-1.svg" alt="" className={styles.cardIcon} aria-hidden />
            <h3 className={styles.cardTitle}>Вклад в мечту</h3>
            <p className={styles.cardText}>
              Самый ценный подарок для нас — ваше присутствие рядом. Но если вы захотите
              порадовать нас, мы будем благодарны за вклад в наше свадебное путешествие.
            </p>
          </Reveal>

          <Reveal className={styles.card} delay={120}>
            <img src="/garden/gift-2.svg" alt="" className={styles.cardIcon} aria-hidden />
            <h3 className={styles.cardTitle}>Бутылочка вина</h3>
            <p className={styles.cardText}>
              Будем рады бутылочке вашего любимого вина — мы откроем её в первую
              годовщину нашей свадьбы и вспомним этот день.
            </p>
          </Reveal>
        </div>

        <Reveal className={styles.care} delay={80}>
          <img src="/garden/dc-top-leaf.svg" alt="" className={styles.careLeaf} aria-hidden />
          <h3 className={styles.careTitle}>С заботой о вас</h3>
          <p className={styles.careText}>
            Если у вас остались вопросы по организации дня — не стесняйтесь, напишите нам.
            Мы с радостью поможем и подскажем всё необходимое.
          </p>
          <a className={styles.careBtn} href={CONTACT_URL}>
            написать нам
          </a>
        </Reveal>
      </div>
    </section>
  );
}
