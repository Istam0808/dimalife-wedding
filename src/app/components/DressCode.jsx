import Reveal from "./Reveal";
import styles from "./DressCode.module.scss";

const SWATCHES = [
  "#efe6d7",
  "#e9e0b9",
  "#dad9bb",
  "#a6ac8b",
  "#e5e0cc",
  "#c5bba0",
  "#b3a690",
  "#838570",
];

export default function DressCode() {
  return (
    <section className={styles.dresscode}>
      <img src="/garden/dc-leaf-left.svg" alt="" className={styles.leafLeft} aria-hidden />
      <img src="/garden/dc-leaf-right.svg" alt="" className={styles.leafRight} aria-hidden />

      <div className={styles.inner}>
        <Reveal as="h2" className={styles.title}>
          Дресс-код
        </Reveal>
        <Reveal className={styles.text} delay={80}>
          <p>
            Нам будет приятно, если вы поддержите атмосферу праздника и выберете наряды
            в природных, спокойных оттенках. Ниже — палитра для вдохновения.
          </p>
        </Reveal>

        <Reveal className={styles.swatches} delay={160}>
          {SWATCHES.map((color) => (
            <span key={color} className={styles.swatch} style={{ background: color }} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
