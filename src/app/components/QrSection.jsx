import Reveal from "./Reveal";
import styles from "./QrSection.module.scss";

export default function QrSection() {
  return (
    <section className={styles.qr}>
      <Reveal className={styles.inner}>
        <h2 className={styles.title}>Откройте приглашение с телефона</h2>
        <p className={styles.text}>
          Наведите камеру телефона на QR-код, чтобы открыть приглашение
          и заполнить анкету в удобном формате.
        </p>
        <img src="/garden/qr.svg" alt="QR-код приглашения" className={styles.code} />
      </Reveal>
    </section>
  );
}
