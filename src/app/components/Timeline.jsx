import Reveal from "./Reveal";
import styles from "./Timeline.module.scss";

const EVENTS = [
  {
    time: "19:00",
    title: "Сбор гостей",
    desc: "Встречаем вас игристым и лёгкими закусками",
    icon: "/garden/tl-gathering.svg",
  },
  {
    time: "19:30",
    title: "Церемония",
    desc: "Самый трепетный момент вечера — мы скажем друг другу «да»",
    icon: "/garden/tl-ceremony.svg",
  },
  {
    time: "20:00",
    title: "Праздничный ужин",
    desc: "Тёплые слова, вкусный ужин, танцы и музыка до позднего вечера",
    icon: "/garden/tl-dinner.svg",
  },
  {
    time: "23:00",
    title: "Завершение вечера",
    desc: "Финальный аккорд праздника и тёплые объятия на прощание",
    icon: "/garden/tl-finish.svg",
  },
];

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <div className={styles.inner}>
        <Reveal as="h2" className={styles.title}>
          План дня
        </Reveal>

        <div className={styles.track}>
          <span className={styles.line} aria-hidden />
          {EVENTS.map((event, index) => (
            <Reveal key={event.time} className={styles.item} delay={index * 120}>
              <div className={styles.iconWrap}>
                <img src={event.icon} alt="" aria-hidden />
              </div>
              <div className={styles.content}>
                <span className={styles.time}>{event.time}</span>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.desc}>{event.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
